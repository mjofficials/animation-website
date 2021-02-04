var _____WB$wombat$assign$function_____ = function (name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function (obj) {
        this.__WB_source = obj;
        return this;
    };
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
    +(function (a) {
        "use strict";
        var b = a.fn.jquery.split(" ")[0].split(".");
        if ((b[0] < 2 && b[1] < 9) || (1 == b[0] && 9 == b[1] && b[2] < 1) || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
    })(jQuery),
        +(function (a) {
            "use strict";
            function b() {
                var a = document.createElement("bootstrap"),
                    b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
                for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
                return !1;
            }
            (a.fn.emulateTransitionEnd = function (b) {
                var c = !1,
                    d = this;
                a(this).one("bsTransitionEnd", function () {
                    c = !0;
                });
                var e = function () {
                    c || a(d).trigger(a.support.transition.end);
                };
                return setTimeout(e, b), this;
            }),
                a(function () {
                    (a.support.transition = b()),
                        a.support.transition &&
                        (a.event.special.bsTransitionEnd = {
                            bindType: a.support.transition.end,
                            delegateType: a.support.transition.end,
                            handle: function (b) {
                                if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments);
                            },
                        });
                });
        })(jQuery),
        +(function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var c = a(this),
                        e = c.data("bs.alert");
                    e || c.data("bs.alert", (e = new d(this))), "string" == typeof b && e[b].call(c);
                });
            }
            var c = '[data-dismiss="alert"]',
                d = function (b) {
                    a(b).on("click", c, this.close);
                };
            (d.VERSION = "3.3.7"),
                (d.TRANSITION_DURATION = 150),
                (d.prototype.close = function (b) {
                    function c() {
                        g.detach().trigger("closed.bs.alert").remove();
                    }
                    var e = a(this),
                        f = e.attr("data-target");
                    f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
                    var g = a("#" === f ? [] : f);
                    b && b.preventDefault(),
                        g.length || (g = e.closest(".alert")),
                        g.trigger((b = a.Event("close.bs.alert"))),
                        b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
                });
            var e = a.fn.alert;
            (a.fn.alert = b),
                (a.fn.alert.Constructor = d),
                (a.fn.alert.noConflict = function () {
                    return (a.fn.alert = e), this;
                }),
                a(document).on("click.bs.alert.data-api", c, d.prototype.close);
        })(jQuery),
        +(function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var d = a(this),
                        e = d.data("bs.button"),
                        f = "object" == typeof b && b;
                    e || d.data("bs.button", (e = new c(this, f))), "toggle" == b ? e.toggle() : b && e.setState(b);
                });
            }
            var c = function (b, d) {
                (this.$element = a(b)), (this.options = a.extend({}, c.DEFAULTS, d)), (this.isLoading = !1);
            };
            (c.VERSION = "3.3.7"),
                (c.DEFAULTS = { loadingText: "loading..." }),
                (c.prototype.setState = function (b) {
                    var c = "disabled",
                        d = this.$element,
                        e = d.is("input") ? "val" : "html",
                        f = d.data();
                    (b += "Text"),
                        null == f.resetText && d.data("resetText", d[e]()),
                        setTimeout(
                            a.proxy(function () {
                                d[e](null == f[b] ? this.options[b] : f[b]),
                                    "loadingText" == b ? ((this.isLoading = !0), d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && ((this.isLoading = !1), d.removeClass(c).removeAttr(c).prop(c, !1));
                            }, this),
                            0
                        );
                }),
                (c.prototype.toggle = function () {
                    var a = !0,
                        b = this.$element.closest('[data-toggle="buttons"]');
                    if (b.length) {
                        var c = this.$element.find("input");
                        "radio" == c.prop("type")
                            ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active"))
                            : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")),
                            c.prop("checked", this.$element.hasClass("active")),
                            a && c.trigger("change");
                    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
                });
            var d = a.fn.button;
            (a.fn.button = b),
                (a.fn.button.Constructor = c),
                (a.fn.button.noConflict = function () {
                    return (a.fn.button = d), this;
                }),
                a(document)
                    .on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
                        var d = a(c.target).closest(".btn");
                        b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"));
                    })
                    .on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
                        a(b.target)
                            .closest(".btn")
                            .toggleClass("focus", /^focus(in)?$/.test(b.type));
                    });
        })(jQuery),
        +(function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var d = a(this),
                        e = d.data("bs.carousel"),
                        f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                        g = "string" == typeof b ? b : f.slide;
                    e || d.data("bs.carousel", (e = new c(this, f))), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
                });
            }
            var c = function (b, c) {
                (this.$element = a(b)),
                    (this.$indicators = this.$element.find(".carousel-indicators")),
                    (this.options = c),
                    (this.paused = null),
                    (this.sliding = null),
                    (this.interval = null),
                    (this.$active = null),
                    (this.$items = null),
                    this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
                    "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
            };
            (c.VERSION = "3.3.7"),
                (c.TRANSITION_DURATION = 600),
                (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
                (c.prototype.keydown = function (a) {
                    if (!/input|textarea/i.test(a.target.tagName)) {
                        switch (a.which) {
                            case 37:
                                this.prev();
                                break;
                            case 39:
                                this.next();
                                break;
                            default:
                                return;
                        }
                        a.preventDefault();
                    }
                }),
                (c.prototype.cycle = function (b) {
                    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
                }),
                (c.prototype.getItemIndex = function (a) {
                    return (this.$items = a.parent().children(".item")), this.$items.index(a || this.$active);
                }),
                (c.prototype.getItemForDirection = function (a, b) {
                    var c = this.getItemIndex(b),
                        d = ("prev" == a && 0 === c) || ("next" == a && c == this.$items.length - 1);
                    if (d && !this.options.wrap) return b;
                    var e = "prev" == a ? -1 : 1,
                        f = (c + e) % this.$items.length;
                    return this.$items.eq(f);
                }),
                (c.prototype.to = function (a) {
                    var b = this,
                        c = this.getItemIndex((this.$active = this.$element.find(".item.active")));
                    if (!(a > this.$items.length - 1 || a < 0))
                        return this.sliding
                            ? this.$element.one("slid.bs.carousel", function () {
                                b.to(a);
                            })
                            : c == a
                                ? this.pause().cycle()
                                : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
                }),
                (c.prototype.pause = function (b) {
                    return (
                        b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), (this.interval = clearInterval(this.interval)), this
                    );
                }),
                (c.prototype.next = function () {
                    if (!this.sliding) return this.slide("next");
                }),
                (c.prototype.prev = function () {
                    if (!this.sliding) return this.slide("prev");
                }),
                (c.prototype.slide = function (b, d) {
                    var e = this.$element.find(".item.active"),
                        f = d || this.getItemForDirection(b, e),
                        g = this.interval,
                        h = "next" == b ? "left" : "right",
                        i = this;
                    if (f.hasClass("active")) return (this.sliding = !1);
                    var j = f[0],
                        k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
                    if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
                        if (((this.sliding = !0), g && this.pause(), this.$indicators.length)) {
                            this.$indicators.find(".active").removeClass("active");
                            var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                            l && l.addClass("active");
                        }
                        var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });
                        return (
                            a.support.transition && this.$element.hasClass("slide")
                                ? (f.addClass(b),
                                    f[0].offsetWidth,
                                    e.addClass(h),
                                    f.addClass(h),
                                    e
                                        .one("bsTransitionEnd", function () {
                                            f.removeClass([b, h].join(" ")).addClass("active"),
                                                e.removeClass(["active", h].join(" ")),
                                                (i.sliding = !1),
                                                setTimeout(function () {
                                                    i.$element.trigger(m);
                                                }, 0);
                                        })
                                        .emulateTransitionEnd(c.TRANSITION_DURATION))
                                : (e.removeClass("active"), f.addClass("active"), (this.sliding = !1), this.$element.trigger(m)),
                            g && this.cycle(),
                            this
                        );
                    }
                });
            var d = a.fn.carousel;
            (a.fn.carousel = b),
                (a.fn.carousel.Constructor = c),
                (a.fn.carousel.noConflict = function () {
                    return (a.fn.carousel = d), this;
                });
            var e = function (c) {
                var d,
                    e = a(this),
                    f = a(e.attr("data-target") || ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")));
                if (f.hasClass("carousel")) {
                    var g = a.extend({}, f.data(), e.data()),
                        h = e.attr("data-slide-to");
                    h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
                }
            };
            a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e),
                a(window).on("load", function () {
                    a('[data-ride="carousel"]').each(function () {
                        var c = a(this);
                        b.call(c, c.data());
                    });
                });
        })(jQuery),
        +(function (a) {
            "use strict";
            function b(b) {
                var c,
                    d = b.attr("data-target") || ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
                return a(d);
            }
            function c(b) {
                return this.each(function () {
                    var c = a(this),
                        e = c.data("bs.collapse"),
                        f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
                    !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", (e = new d(this, f))), "string" == typeof b && e[b]();
                });
            }
            var d = function (b, c) {
                (this.$element = a(b)),
                    (this.options = a.extend({}, d.DEFAULTS, c)),
                    (this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]')),
                    (this.transitioning = null),
                    this.options.parent ? (this.$parent = this.getParent()) : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
                    this.options.toggle && this.toggle();
            };
            (d.VERSION = "3.3.7"),
                (d.TRANSITION_DURATION = 350),
                (d.DEFAULTS = { toggle: !0 }),
                (d.prototype.dimension = function () {
                    var a = this.$element.hasClass("width");
                    return a ? "width" : "height";
                }),
                (d.prototype.show = function () {
                    if (!this.transitioning && !this.$element.hasClass("in")) {
                        var b,
                            e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                        if (!(e && e.length && ((b = e.data("bs.collapse")), b && b.transitioning))) {
                            var f = a.Event("show.bs.collapse");
                            if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
                                e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                                var g = this.dimension();
                                this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), (this.transitioning = 1);
                                var h = function () {
                                    this.$element.removeClass("collapsing").addClass("collapse in")[g](""), (this.transitioning = 0), this.$element.trigger("shown.bs.collapse");
                                };
                                if (!a.support.transition) return h.call(this);
                                var i = a.camelCase(["scroll", g].join("-"));
                                this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
                            }
                        }
                    }
                }),
                (d.prototype.hide = function () {
                    if (!this.transitioning && this.$element.hasClass("in")) {
                        var b = a.Event("hide.bs.collapse");
                        if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
                            var c = this.dimension();
                            this.$element[c](this.$element[c]())[0].offsetHeight,
                                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                                (this.transitioning = 1);
                            var e = function () {
                                (this.transitioning = 0), this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                            };
                            return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
                        }
                    }
                }),
                (d.prototype.toggle = function () {
                    this[this.$element.hasClass("in") ? "hide" : "show"]();
                }),
                (d.prototype.getParent = function () {
                    return a(this.options.parent)
                        .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
                        .each(
                            a.proxy(function (c, d) {
                                var e = a(d);
                                this.addAriaAndCollapsedClass(b(e), e);
                            }, this)
                        )
                        .end();
                }),
                (d.prototype.addAriaAndCollapsedClass = function (a, b) {
                    var c = a.hasClass("in");
                    a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
                });
            var e = a.fn.collapse;
            (a.fn.collapse = c),
                (a.fn.collapse.Constructor = d),
                (a.fn.collapse.noConflict = function () {
                    return (a.fn.collapse = e), this;
                }),
                a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
                    var e = a(this);
                    e.attr("data-target") || d.preventDefault();
                    var f = b(e),
                        g = f.data("bs.collapse"),
                        h = g ? "toggle" : e.data();
                    c.call(f, h);
                });
        })(jQuery),
        +(function (a) {
            "use strict";
            function b(b) {
                var c = b.attr("data-target");
                c || ((c = b.attr("href")), (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
                var d = c && a(c);
                return d && d.length ? d : b.parent();
            }
            function c(c) {
                (c && 3 === c.which) ||
                    (a(e).remove(),
                        a(f).each(function () {
                            var d = a(this),
                                e = b(d),
                                f = { relatedTarget: this };
                            e.hasClass("open") &&
                                ((c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target)) ||
                                    (e.trigger((c = a.Event("hide.bs.dropdown", f))), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
                        }));
            }
            function d(b) {
                return this.each(function () {
                    var c = a(this),
                        d = c.data("bs.dropdown");
                    d || c.data("bs.dropdown", (d = new g(this))), "string" == typeof b && d[b].call(c);
                });
            }
            var e = ".dropdown-backdrop",
                f = '[data-toggle="dropdown"]',
                g = function (b) {
                    a(b).on("click.bs.dropdown", this.toggle);
                };
            (g.VERSION = "3.3.7"),
                (g.prototype.toggle = function (d) {
                    var e = a(this);
                    if (!e.is(".disabled, :disabled")) {
                        var f = b(e),
                            g = f.hasClass("open");
                        if ((c(), !g)) {
                            "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                            var h = { relatedTarget: this };
                            if ((f.trigger((d = a.Event("show.bs.dropdown", h))), d.isDefaultPrevented())) return;
                            e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
                        }
                        return !1;
                    }
                }),
                (g.prototype.keydown = function (c) {
                    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
                        var d = a(this);
                        if ((c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled"))) {
                            var e = b(d),
                                g = e.hasClass("open");
                            if ((!g && 27 != c.which) || (g && 27 == c.which)) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                            var h = " li:not(.disabled):visible a",
                                i = e.find(".dropdown-menu" + h);
                            if (i.length) {
                                var j = i.index(c.target);
                                38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
                            }
                        }
                    }
                });
            var h = a.fn.dropdown;
            (a.fn.dropdown = d),
                (a.fn.dropdown.Constructor = g),
                (a.fn.dropdown.noConflict = function () {
                    return (a.fn.dropdown = h), this;
                }),
                a(document)
                    .on("click.bs.dropdown.data-api", c)
                    .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
                        a.stopPropagation();
                    })
                    .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
                    .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
                    .on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
        })(jQuery),
        +(function (a) {
            "use strict";
            function b(b, d) {
                return this.each(function () {
                    var e = a(this),
                        f = e.data("bs.modal"),
                        g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
                    f || e.data("bs.modal", (f = new c(this, g))), "string" == typeof b ? f[b](d) : g.show && f.show(d);
                });
            }
            var c = function (b, c) {
                (this.options = c),
                    (this.$body = a(document.body)),
                    (this.$element = a(b)),
                    (this.$dialog = this.$element.find(".modal-dialog")),
                    (this.$backdrop = null),
                    (this.isShown = null),
                    (this.originalBodyPad = null),
                    (this.scrollbarWidth = 0),
                    (this.ignoreBackdropClick = !1),
                    this.options.remote &&
                    this.$element.find(".modal-content").load(
                        this.options.remote,
                        a.proxy(function () {
                            this.$element.trigger("loaded.bs.modal");
                        }, this)
                    );
            };
            (c.VERSION = "3.3.7"),
                (c.TRANSITION_DURATION = 300),
                (c.BACKDROP_TRANSITION_DURATION = 150),
                (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
                (c.prototype.toggle = function (a) {
                    return this.isShown ? this.hide() : this.show(a);
                }),
                (c.prototype.show = function (b) {
                    var d = this,
                        e = a.Event("show.bs.modal", { relatedTarget: b });
                    this.$element.trigger(e),
                        this.isShown ||
                        e.isDefaultPrevented() ||
                        ((this.isShown = !0),
                            this.checkScrollbar(),
                            this.setScrollbar(),
                            this.$body.addClass("modal-open"),
                            this.escape(),
                            this.resize(),
                            this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)),
                            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                                d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                                    a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
                                });
                            }),
                            this.backdrop(function () {
                                var e = a.support.transition && d.$element.hasClass("fade");
                                d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
                                var f = a.Event("shown.bs.modal", { relatedTarget: b });
                                e
                                    ? d.$dialog
                                        .one("bsTransitionEnd", function () {
                                            d.$element.trigger("focus").trigger(f);
                                        })
                                        .emulateTransitionEnd(c.TRANSITION_DURATION)
                                    : d.$element.trigger("focus").trigger(f);
                            }));
                }),
                (c.prototype.hide = function (b) {
                    b && b.preventDefault(),
                        (b = a.Event("hide.bs.modal")),
                        this.$element.trigger(b),
                        this.isShown &&
                        !b.isDefaultPrevented() &&
                        ((this.isShown = !1),
                            this.escape(),
                            this.resize(),
                            a(document).off("focusin.bs.modal"),
                            this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
                            this.$dialog.off("mousedown.dismiss.bs.modal"),
                            a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
                }),
                (c.prototype.enforceFocus = function () {
                    a(document)
                        .off("focusin.bs.modal")
                        .on(
                            "focusin.bs.modal",
                            a.proxy(function (a) {
                                document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
                            }, this)
                        );
                }),
                (c.prototype.escape = function () {
                    this.isShown && this.options.keyboard
                        ? this.$element.on(
                            "keydown.dismiss.bs.modal",
                            a.proxy(function (a) {
                                27 == a.which && this.hide();
                            }, this)
                        )
                        : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
                }),
                (c.prototype.resize = function () {
                    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
                }),
                (c.prototype.hideModal = function () {
                    var a = this;
                    this.$element.hide(),
                        this.backdrop(function () {
                            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
                        });
                }),
                (c.prototype.removeBackdrop = function () {
                    this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
                }),
                (c.prototype.backdrop = function (b) {
                    var d = this,
                        e = this.$element.hasClass("fade") ? "fade" : "";
                    if (this.isShown && this.options.backdrop) {
                        var f = a.support.transition && e;
                        if (
                            ((this.$backdrop = a(document.createElement("div"))
                                .addClass("modal-backdrop " + e)
                                .appendTo(this.$body)),
                                this.$element.on(
                                    "click.dismiss.bs.modal",
                                    a.proxy(function (a) {
                                        return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
                                    }, this)
                                ),
                                f && this.$backdrop[0].offsetWidth,
                                this.$backdrop.addClass("in"),
                                !b)
                        )
                            return;
                        f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
                    } else if (!this.isShown && this.$backdrop) {
                        this.$backdrop.removeClass("in");
                        var g = function () {
                            d.removeBackdrop(), b && b();
                        };
                        a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
                    } else b && b();
                }),
                (c.prototype.handleUpdate = function () {
                    this.adjustDialog();
                }),
                (c.prototype.adjustDialog = function () {
                    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                    this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
                }),
                (c.prototype.resetAdjustments = function () {
                    this.$element.css({ paddingLeft: "", paddingRight: "" });
                }),
                (c.prototype.checkScrollbar = function () {
                    var a = window.innerWidth;
                    if (!a) {
                        var b = document.documentElement.getBoundingClientRect();
                        a = b.right - Math.abs(b.left);
                    }
                    (this.bodyIsOverflowing = document.body.clientWidth < a), (this.scrollbarWidth = this.measureScrollbar());
                }),
                (c.prototype.setScrollbar = function () {
                    var a = parseInt(this.$body.css("padding-right") || 0, 10);
                    (this.originalBodyPad = document.body.style.paddingRight || ""), this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
                }),
                (c.prototype.resetScrollbar = function () {
                    this.$body.css("padding-right", this.originalBodyPad);
                }),
                (c.prototype.measureScrollbar = function () {
                    var a = document.createElement("div");
                    (a.className = "modal-scrollbar-measure"), this.$body.append(a);
                    var b = a.offsetWidth - a.clientWidth;
                    return this.$body[0].removeChild(a), b;
                });
            var d = a.fn.modal;
            (a.fn.modal = b),
                (a.fn.modal.Constructor = c),
                (a.fn.modal.noConflict = function () {
                    return (a.fn.modal = d), this;
                }),
                a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
                    var d = a(this),
                        e = d.attr("href"),
                        f = a(d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))),
                        g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
                    d.is("a") && c.preventDefault(),
                        f.one("show.bs.modal", function (a) {
                            a.isDefaultPrevented() ||
                                f.one("hidden.bs.modal", function () {
                                    d.is(":visible") && d.trigger("focus");
                                });
                        }),
                        b.call(f, g, this);
                });
        })(jQuery),
        +(function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var d = a(this),
                        e = d.data("bs.tooltip"),
                        f = "object" == typeof b && b;
                    (!e && /destroy|hide/.test(b)) || (e || d.data("bs.tooltip", (e = new c(this, f))), "string" == typeof b && e[b]());
                });
            }
            var c = function (a, b) {
                (this.type = null), (this.options = null), (this.enabled = null), (this.timeout = null), (this.hoverState = null), (this.$element = null), (this.inState = null), this.init("tooltip", a, b);
            };
            (c.VERSION = "3.3.7"),
                (c.TRANSITION_DURATION = 150),
                (c.DEFAULTS = {
                    animation: !0,
                    placement: "top",
                    selector: !1,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    container: !1,
                    viewport: { selector: "body", padding: 0 },
                }),
                (c.prototype.init = function (b, c, d) {
                    if (
                        ((this.enabled = !0),
                            (this.type = b),
                            (this.$element = a(c)),
                            (this.options = this.getOptions(d)),
                            (this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport)),
                            (this.inState = { click: !1, hover: !1, focus: !1 }),
                            this.$element[0] instanceof document.constructor && !this.options.selector)
                    )
                        throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                    for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
                        var g = e[f];
                        if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
                        else if ("manual" != g) {
                            var h = "hover" == g ? "mouseenter" : "focusin",
                                i = "hover" == g ? "mouseleave" : "focusout";
                            this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
                        }
                    }
                    this.options.selector ? (this._options = a.extend({}, this.options, { trigger: "manual", selector: "" })) : this.fixTitle();
                }),
                (c.prototype.getDefaults = function () {
                    return c.DEFAULTS;
                }),
                (c.prototype.getOptions = function (b) {
                    return (b = a.extend({}, this.getDefaults(), this.$element.data(), b)), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
                }),
                (c.prototype.getDelegateOptions = function () {
                    var b = {},
                        c = this.getDefaults();
                    return (
                        this._options &&
                        a.each(this._options, function (a, d) {
                            c[a] != d && (b[a] = d);
                        }),
                        b
                    );
                }),
                (c.prototype.enter = function (b) {
                    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
                    return (
                        c || ((c = new this.constructor(b.currentTarget, this.getDelegateOptions())), a(b.currentTarget).data("bs." + this.type, c)),
                        b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
                        c.tip().hasClass("in") || "in" == c.hoverState
                            ? void (c.hoverState = "in")
                            : (clearTimeout(c.timeout),
                                (c.hoverState = "in"),
                                c.options.delay && c.options.delay.show
                                    ? void (c.timeout = setTimeout(function () {
                                        "in" == c.hoverState && c.show();
                                    }, c.options.delay.show))
                                    : c.show())
                    );
                }),
                (c.prototype.isInStateTrue = function () {
                    for (var a in this.inState) if (this.inState[a]) return !0;
                    return !1;
                }),
                (c.prototype.leave = function (b) {
                    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
                    if (
                        (c || ((c = new this.constructor(b.currentTarget, this.getDelegateOptions())), a(b.currentTarget).data("bs." + this.type, c)),
                            b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
                            !c.isInStateTrue())
                    )
                        return (
                            clearTimeout(c.timeout),
                            (c.hoverState = "out"),
                            c.options.delay && c.options.delay.hide
                                ? void (c.timeout = setTimeout(function () {
                                    "out" == c.hoverState && c.hide();
                                }, c.options.delay.hide))
                                : c.hide()
                        );
                }),
                (c.prototype.show = function () {
                    var b = a.Event("show.bs." + this.type);
                    if (this.hasContent() && this.enabled) {
                        this.$element.trigger(b);
                        var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                        if (b.isDefaultPrevented() || !d) return;
                        var e = this,
                            f = this.tip(),
                            g = this.getUID(this.type);
                        this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
                        var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                            i = /\s?auto?\s?/i,
                            j = i.test(h);
                        j && (h = h.replace(i, "") || "top"),
                            f
                                .detach()
                                .css({ top: 0, left: 0, display: "block" })
                                .addClass(h)
                                .data("bs." + this.type, this),
                            this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element),
                            this.$element.trigger("inserted.bs." + this.type);
                        var k = this.getPosition(),
                            l = f[0].offsetWidth,
                            m = f[0].offsetHeight;
                        if (j) {
                            var n = h,
                                o = this.getPosition(this.$viewport);
                            (h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h),
                                f.removeClass(n).addClass(h);
                        }
                        var p = this.getCalculatedOffset(h, k, l, m);
                        this.applyPlacement(p, h);
                        var q = function () {
                            var a = e.hoverState;
                            e.$element.trigger("shown.bs." + e.type), (e.hoverState = null), "out" == a && e.leave(e);
                        };
                        a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
                    }
                }),
                (c.prototype.applyPlacement = function (b, c) {
                    var d = this.tip(),
                        e = d[0].offsetWidth,
                        f = d[0].offsetHeight,
                        g = parseInt(d.css("margin-top"), 10),
                        h = parseInt(d.css("margin-left"), 10);
                    isNaN(g) && (g = 0),
                        isNaN(h) && (h = 0),
                        (b.top += g),
                        (b.left += h),
                        a.offset.setOffset(
                            d[0],
                            a.extend(
                                {
                                    using: function (a) {
                                        d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                                    },
                                },
                                b
                            ),
                            0
                        ),
                        d.addClass("in");
                    var i = d[0].offsetWidth,
                        j = d[0].offsetHeight;
                    "top" == c && j != f && (b.top = b.top + f - j);
                    var k = this.getViewportAdjustedDelta(c, b, i, j);
                    k.left ? (b.left += k.left) : (b.top += k.top);
                    var l = /top|bottom/.test(c),
                        m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
                        n = l ? "offsetWidth" : "offsetHeight";
                    d.offset(b), this.replaceArrow(m, d[0][n], l);
                }),
                (c.prototype.replaceArrow = function (a, b, c) {
                    this.arrow()
                        .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
                        .css(c ? "top" : "left", "");
                }),
                (c.prototype.setContent = function () {
                    var a = this.tip(),
                        b = this.getTitle();
                    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
                }),
                (c.prototype.hide = function (b) {
                    function d() {
                        "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
                    }
                    var e = this,
                        f = a(this.$tip),
                        g = a.Event("hide.bs." + this.type);
                    if ((this.$element.trigger(g), !g.isDefaultPrevented()))
                        return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), (this.hoverState = null), this;
                }),
                (c.prototype.fixTitle = function () {
                    var a = this.$element;
                    (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
                }),
                (c.prototype.hasContent = function () {
                    return this.getTitle();
                }),
                (c.prototype.getPosition = function (b) {
                    b = b || this.$element;
                    var c = b[0],
                        d = "BODY" == c.tagName,
                        e = c.getBoundingClientRect();
                    null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));
                    var f = window.SVGElement && c instanceof window.SVGElement,
                        g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
                        h = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
                        i = d ? { width: a(window).width(), height: a(window).height() } : null;
                    return a.extend({}, e, h, i, g);
                }),
                (c.prototype.getCalculatedOffset = function (a, b, c, d) {
                    return "bottom" == a
                        ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
                        : "top" == a
                            ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
                            : "left" == a
                                ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
                                : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
                }),
                (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
                    var e = { top: 0, left: 0 };
                    if (!this.$viewport) return e;
                    var f = (this.options.viewport && this.options.viewport.padding) || 0,
                        g = this.getPosition(this.$viewport);
                    if (/right|left/.test(a)) {
                        var h = b.top - f - g.scroll,
                            i = b.top + f - g.scroll + d;
                        h < g.top ? (e.top = g.top - h) : i > g.top + g.height && (e.top = g.top + g.height - i);
                    } else {
                        var j = b.left - f,
                            k = b.left + f + c;
                        j < g.left ? (e.left = g.left - j) : k > g.right && (e.left = g.left + g.width - k);
                    }
                    return e;
                }),
                (c.prototype.getTitle = function () {
                    var a,
                        b = this.$element,
                        c = this.options;
                    return (a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
                }),
                (c.prototype.getUID = function (a) {
                    do a += ~~(1e6 * Math.random());
                    while (document.getElementById(a));
                    return a;
                }),
                (c.prototype.tip = function () {
                    if (!this.$tip && ((this.$tip = a(this.options.template)), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                    return this.$tip;
                }),
                (c.prototype.arrow = function () {
                    return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
                }),
                (c.prototype.enable = function () {
                    this.enabled = !0;
                }),
                (c.prototype.disable = function () {
                    this.enabled = !1;
                }),
                (c.prototype.toggleEnabled = function () {
                    this.enabled = !this.enabled;
                }),
                (c.prototype.toggle = function (b) {
                    var c = this;
                    b && ((c = a(b.currentTarget).data("bs." + this.type)), c || ((c = new this.constructor(b.currentTarget, this.getDelegateOptions())), a(b.currentTarget).data("bs." + this.type, c))),
                        b ? ((c.inState.click = !c.inState.click), c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
                }),
                (c.prototype.destroy = function () {
                    var a = this;
                    clearTimeout(this.timeout),
                        this.hide(function () {
                            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), (a.$tip = null), (a.$arrow = null), (a.$viewport = null), (a.$element = null);
                        });
                });
            var d = a.fn.tooltip;
            (a.fn.tooltip = b),
                (a.fn.tooltip.Constructor = c),
                (a.fn.tooltip.noConflict = function () {
                    return (a.fn.tooltip = d), this;
                });
        })(jQuery),
        +(function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var d = a(this),
                        e = d.data("bs.popover"),
                        f = "object" == typeof b && b;
                    (!e && /destroy|hide/.test(b)) || (e || d.data("bs.popover", (e = new c(this, f))), "string" == typeof b && e[b]());
                });
            }
            var c = function (a, b) {
                this.init("popover", a, b);
            };
            if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
            (c.VERSION = "3.3.7"),
                (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
                })),
                (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
                (c.prototype.constructor = c),
                (c.prototype.getDefaults = function () {
                    return c.DEFAULTS;
                }),
                (c.prototype.setContent = function () {
                    var a = this.tip(),
                        b = this.getTitle(),
                        c = this.getContent();
                    a.find(".popover-title")[this.options.html ? "html" : "text"](b),
                        a.find(".popover-content").children().detach().end()[this.options.html ? ("string" == typeof c ? "html" : "append") : "text"](c),
                        a.removeClass("fade top bottom left right in"),
                        a.find(".popover-title").html() || a.find(".popover-title").hide();
                }),
                (c.prototype.hasContent = function () {
                    return this.getTitle() || this.getContent();
                }),
                (c.prototype.getContent = function () {
                    var a = this.$element,
                        b = this.options;
                    return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
                }),
                (c.prototype.arrow = function () {
                    return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
                });
            var d = a.fn.popover;
            (a.fn.popover = b),
                (a.fn.popover.Constructor = c),
                (a.fn.popover.noConflict = function () {
                    return (a.fn.popover = d), this;
                });
        })(jQuery),
        +(function (a) {
            "use strict";
            function b(c, d) {
                (this.$body = a(document.body)),
                    (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
                    (this.options = a.extend({}, b.DEFAULTS, d)),
                    (this.selector = (this.options.target || "") + " .nav li > a"),
                    (this.offsets = []),
                    (this.targets = []),
                    (this.activeTarget = null),
                    (this.scrollHeight = 0),
                    this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)),
                    this.refresh(),
                    this.process();
            }
            function c(c) {
                return this.each(function () {
                    var d = a(this),
                        e = d.data("bs.scrollspy"),
                        f = "object" == typeof c && c;
                    e || d.data("bs.scrollspy", (e = new b(this, f))), "string" == typeof c && e[c]();
                });
            }
            (b.VERSION = "3.3.7"),
                (b.DEFAULTS = { offset: 10 }),
                (b.prototype.getScrollHeight = function () {
                    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
                }),
                (b.prototype.refresh = function () {
                    var b = this,
                        c = "offset",
                        d = 0;
                    (this.offsets = []),
                        (this.targets = []),
                        (this.scrollHeight = this.getScrollHeight()),
                        a.isWindow(this.$scrollElement[0]) || ((c = "position"), (d = this.$scrollElement.scrollTop())),
                        this.$body
                            .find(this.selector)
                            .map(function () {
                                var b = a(this),
                                    e = b.data("target") || b.attr("href"),
                                    f = /^#./.test(e) && a(e);
                                return (f && f.length && f.is(":visible") && [[f[c]().top + d, e]]) || null;
                            })
                            .sort(function (a, b) {
                                return a[0] - b[0];
                            })
                            .each(function () {
                                b.offsets.push(this[0]), b.targets.push(this[1]);
                            });
                }),
                (b.prototype.process = function () {
                    var a,
                        b = this.$scrollElement.scrollTop() + this.options.offset,
                        c = this.getScrollHeight(),
                        d = this.options.offset + c - this.$scrollElement.height(),
                        e = this.offsets,
                        f = this.targets,
                        g = this.activeTarget;
                    if ((this.scrollHeight != c && this.refresh(), b >= d)) return g != (a = f[f.length - 1]) && this.activate(a);
                    if (g && b < e[0]) return (this.activeTarget = null), this.clear();
                    for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
                }),
                (b.prototype.activate = function (b) {
                    (this.activeTarget = b), this.clear();
                    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
                        d = a(c).parents("li").addClass("active");
                    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
                }),
                (b.prototype.clear = function () {
                    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
                });
            var d = a.fn.scrollspy;
            (a.fn.scrollspy = c),
                (a.fn.scrollspy.Constructor = b),
                (a.fn.scrollspy.noConflict = function () {
                    return (a.fn.scrollspy = d), this;
                }),
                a(window).on("load.bs.scrollspy.data-api", function () {
                    a('[data-spy="scroll"]').each(function () {
                        var b = a(this);
                        c.call(b, b.data());
                    });
                });
        })(jQuery),
        +(function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var d = a(this),
                        e = d.data("bs.tab");
                    e || d.data("bs.tab", (e = new c(this))), "string" == typeof b && e[b]();
                });
            }
            var c = function (b) {
                this.element = a(b);
            };
            (c.VERSION = "3.3.7"),
                (c.TRANSITION_DURATION = 150),
                (c.prototype.show = function () {
                    var b = this.element,
                        c = b.closest("ul:not(.dropdown-menu)"),
                        d = b.data("target");
                    if ((d || ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))), !b.parent("li").hasClass("active"))) {
                        var e = c.find(".active:last a"),
                            f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
                            g = a.Event("show.bs.tab", { relatedTarget: e[0] });
                        if ((e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented())) {
                            var h = a(d);
                            this.activate(b.closest("li"), c),
                                this.activate(h, h.parent(), function () {
                                    e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
                                });
                        }
                    }
                }),
                (c.prototype.activate = function (b, d, e) {
                    function f() {
                        g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                            b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
                            b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                            e && e();
                    }
                    var g = d.find("> .active"),
                        h = e && a.support.transition && ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
                    g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
                });
            var d = a.fn.tab;
            (a.fn.tab = b),
                (a.fn.tab.Constructor = c),
                (a.fn.tab.noConflict = function () {
                    return (a.fn.tab = d), this;
                });
            var e = function (c) {
                c.preventDefault(), b.call(a(this), "show");
            };
            a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
        })(jQuery),
        +(function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var d = a(this),
                        e = d.data("bs.affix"),
                        f = "object" == typeof b && b;
                    e || d.data("bs.affix", (e = new c(this, f))), "string" == typeof b && e[b]();
                });
            }
            var c = function (b, d) {
                (this.options = a.extend({}, c.DEFAULTS, d)),
                    (this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this))),
                    (this.$element = a(b)),
                    (this.affixed = null),
                    (this.unpin = null),
                    (this.pinnedOffset = null),
                    this.checkPosition();
            };
            (c.VERSION = "3.3.7"),
                (c.RESET = "affix affix-top affix-bottom"),
                (c.DEFAULTS = { offset: 0, target: window }),
                (c.prototype.getState = function (a, b, c, d) {
                    var e = this.$target.scrollTop(),
                        f = this.$element.offset(),
                        g = this.$target.height();
                    if (null != c && "top" == this.affixed) return e < c && "top";
                    if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
                    var h = null == this.affixed,
                        i = h ? e : f.top,
                        j = h ? g : b;
                    return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom";
                }),
                (c.prototype.getPinnedOffset = function () {
                    if (this.pinnedOffset) return this.pinnedOffset;
                    this.$element.removeClass(c.RESET).addClass("affix");
                    var a = this.$target.scrollTop(),
                        b = this.$element.offset();
                    return (this.pinnedOffset = b.top - a);
                }),
                (c.prototype.checkPositionWithEventLoop = function () {
                    setTimeout(a.proxy(this.checkPosition, this), 1);
                }),
                (c.prototype.checkPosition = function () {
                    if (this.$element.is(":visible")) {
                        var b = this.$element.height(),
                            d = this.options.offset,
                            e = d.top,
                            f = d.bottom,
                            g = Math.max(a(document).height(), a(document.body).height());
                        "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
                        var h = this.getState(g, b, e, f);
                        if (this.affixed != h) {
                            null != this.unpin && this.$element.css("top", "");
                            var i = "affix" + (h ? "-" + h : ""),
                                j = a.Event(i + ".bs.affix");
                            if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
                            (this.affixed = h),
                                (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
                                this.$element
                                    .removeClass(c.RESET)
                                    .addClass(i)
                                    .trigger(i.replace("affix", "affixed") + ".bs.affix");
                        }
                        "bottom" == h && this.$element.offset({ top: g - b - f });
                    }
                });
            var d = a.fn.affix;
            (a.fn.affix = b),
                (a.fn.affix.Constructor = c),
                (a.fn.affix.noConflict = function () {
                    return (a.fn.affix = d), this;
                }),
                a(window).on("load", function () {
                    a('[data-spy="affix"]').each(function () {
                        var c = a(this),
                            d = c.data();
                        (d.offset = d.offset || {}), null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
                    });
                });
        })(jQuery);
    !(function (a, b, c) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports
            ? (module.exports = function (a, b) {
                return c(a, b);
            })
            : c(a, b);
    })("undefined" != typeof window ? window.jQuery : {}, "undefined" != typeof window ? window : this, function (a, b) {
        "use strict";
        function c(a) {
            var b,
                c = this;
            for (b in a) Object.prototype.hasOwnProperty.call(a, b) && (c[b] = a[b]);
            return c;
        }
        function d() {
            pa(this, d.baseDefaults);
        }
        function e(a) {
            return "string" === ra(a);
        }
        function f(a) {
            return !isNaN(na(a)) && !isNaN(oa(a));
        }
        function g(a) {
            return a && a.getContext ? a.getContext("2d") : null;
        }
        function h(a) {
            var b, c;
            for (b in a) Object.prototype.hasOwnProperty.call(a, b) && ((c = a[b]), "string" === ra(c) && f(c) && "text" !== b && (a[b] = oa(c)));
            void 0 !== a.text && (a.text = String(a.text));
        }
        function i(a) {
            return (a = pa({}, a)), (a.masks = a.masks.slice(0)), a;
        }
        function j(a, b) {
            var c;
            a.save(), (c = i(b.transforms)), b.savedTransforms.push(c);
        }
        function k(a, b) {
            0 === b.savedTransforms.length ? (b.transforms = i(Ea)) : (a.restore(), (b.transforms = b.savedTransforms.pop()));
        }
        function l(a, b, c, d) {
            c[d] && (sa(c[d]) ? (b[d] = c[d].call(a, c)) : (b[d] = c[d]));
        }
        function m(a, b, c) {
            l(a, b, c, "fillStyle"),
                l(a, b, c, "strokeStyle"),
                (b.lineWidth = c.strokeWidth),
                c.rounded ? (b.lineCap = b.lineJoin = "round") : ((b.lineCap = c.strokeCap), (b.lineJoin = c.strokeJoin), (b.miterLimit = c.miterLimit)),
                c.strokeDash || (c.strokeDash = []),
                b.setLineDash && b.setLineDash(c.strokeDash),
                (b.webkitLineDash = c.strokeDash),
                (b.lineDashOffset = b.webkitLineDashOffset = b.mozDashOffset = c.strokeDashOffset),
                (b.shadowOffsetX = c.shadowX),
                (b.shadowOffsetY = c.shadowY),
                (b.shadowBlur = c.shadowBlur),
                (b.shadowColor = c.shadowColor),
                (b.globalAlpha = c.opacity),
                (b.globalCompositeOperation = c.compositing),
                c.imageSmoothing && (b.imageSmoothingEnabled = b.mozImageSmoothingEnabled = c.imageSmoothingEnabled);
        }
        function n(a, b, c) {
            c.mask && (c.autosave && j(a, b), a.clip(), b.transforms.masks.push(c._args));
        }
        function o(a, b) {
            b._transformed && a.restore();
        }
        function p(a, b, c) {
            var d;
            c.closed && b.closePath(),
                c.shadowStroke && 0 !== c.strokeWidth
                    ? (b.stroke(), b.fill(), (b.shadowColor = "transparent"), (b.shadowBlur = 0), b.stroke())
                    : (b.fill(), "transparent" !== c.fillStyle && (b.shadowColor = "transparent"), 0 !== c.strokeWidth && b.stroke()),
                c.closed || b.closePath(),
                o(b, c),
                c.mask && ((d = r(a)), n(b, d, c));
        }
        function q(a, b, c, d, e) {
            (c._toRad = c.inDegrees ? ua / 180 : 1),
                (c._transformed = !0),
                b.save(),
                c.fromCenter || c._centered || void 0 === d || (void 0 === e && (e = d), (c.x += d / 2), (c.y += e / 2), (c._centered = !0)),
                c.rotate && Q(b, c, null),
                (1 === c.scale && 1 === c.scaleX && 1 === c.scaleY) || R(b, c, null),
                (c.translate || c.translateX || c.translateY) && S(b, c, null);
        }
        function r(b) {
            var c,
                d = Da.dataCache;
            return (
                d._canvas === b && d._data
                    ? (c = d._data)
                    : ((c = a.data(b, "jCanvas")),
                        c ||
                        ((c = {
                            canvas: b,
                            layers: [],
                            layer: { names: {}, groups: {} },
                            eventHooks: {},
                            intersecting: [],
                            lastIntersected: null,
                            cursor: a(b).css("cursor"),
                            drag: { layer: null, dragging: !1 },
                            event: { type: null, x: null, y: null },
                            events: {},
                            transforms: i(Ea),
                            savedTransforms: [],
                            animating: !1,
                            animated: null,
                            pixelRatio: 1,
                            scaled: !1,
                        }),
                            a.data(b, "jCanvas", c)),
                        (d._canvas = b),
                        (d._data = c)),
                c
            );
        }
        function s(a, b, c) {
            var d;
            for (d in Ha.events) Object.prototype.hasOwnProperty.call(Ha.events, d) && (c[d] || (c.cursors && c.cursors[d])) && t(a, b, c, d);
            b.events.mouseout ||
                (a.bind("mouseout.jCanvas", function () {
                    var c,
                        d = b.drag.layer;
                    for (d && ((b.drag = {}), E(a, b, d, "dragcancel")), c = 0; c < b.layers.length; c += 1) (d = b.layers[c]), d._hovered && a.triggerLayerEvent(b.layers[c], "mouseout");
                    a.drawLayers();
                }),
                    (b.events.mouseout = !0));
        }
        function t(a, b, c, d) {
            Ha.events[d](a, b), (c._event = !0);
        }
        function u(a, b, c) {
            var d, e, f;
            if (c.draggable || c.cursors) {
                for (d = ["mousedown", "mousemove", "mouseup"], f = 0; f < d.length; f += 1) (e = d[f]), t(a, b, c, e);
                c._event = !0;
            }
        }
        function v(a, b, c, d) {
            var f = b.layer.names;
            d ? void 0 !== d.name && e(c.name) && c.name !== d.name && delete f[c.name] : (d = c), e(d.name) && (f[d.name] = c);
        }
        function w(a, b, c, d) {
            var e,
                f,
                g,
                h,
                i,
                j = b.layer.groups;
            if (d) {
                if (void 0 !== d.groups && null !== c.groups)
                    for (g = 0; g < c.groups.length; g += 1)
                        if (((f = c.groups[g]), (e = j[f]))) {
                            for (i = 0; i < e.length; i += 1)
                                if (e[i] === c) {
                                    (h = i), e.splice(i, 1);
                                    break;
                                }
                            0 === e.length && delete j[f];
                        }
            } else d = c;
            if (void 0 !== d.groups && null !== d.groups) for (g = 0; g < d.groups.length; g += 1) (f = d.groups[g]), (e = j[f]), e || ((e = j[f] = []), (e.name = f)), void 0 === h && (h = e.length), e.splice(h, 0, c);
        }
        function x(a) {
            var b, c, d, e;
            for (b = null, c = a.intersecting.length - 1; c >= 0; c -= 1)
                if (((b = a.intersecting[c]), b._masks)) {
                    for (e = b._masks.length - 1; e >= 0; e -= 1)
                        if (((d = b._masks[e]), !d.intersects)) {
                            b.intersects = !1;
                            break;
                        }
                    if (b.intersects && !b.intangible) break;
                }
            return b && b.intangible && (b = null), b;
        }
        function y(a, b, c, d) {
            c && c.visible && c._method && ((c._next = d || null), c._method && c._method.call(a, c));
        }
        function z(a, b, c) {
            var d, e, f, g, h, i, j, k, l, m;
            if (((g = b.drag), (e = g.layer), (h = (e && e.dragGroups) || []), (d = b.layers), "mousemove" === c || "touchmove" === c)) {
                if (
                    (g.dragging ||
                        ((g.dragging = !0), (e.dragging = !0), e.bringToFront && (d.splice(e.index, 1), (e.index = d.push(e))), (e._startX = e.x), (e._startY = e.y), (e._endX = e._eventX), (e._endY = e._eventY), E(a, b, e, "dragstart")),
                        g.dragging)
                )
                    for (
                        l = e._eventX - (e._endX - e._startX),
                        m = e._eventY - (e._endY - e._startY),
                        e.dx = l - e.x,
                        e.dy = m - e.y,
                        "y" !== e.restrictDragToAxis && (e.x = l),
                        "x" !== e.restrictDragToAxis && (e.y = m),
                        E(a, b, e, "drag"),
                        k = 0;
                        k < h.length;
                        k += 1
                    )
                        if (((j = h[k]), (i = b.layer.groups[j]), e.groups && i))
                            for (f = 0; f < i.length; f += 1)
                                i[f] !== e && ("y" !== e.restrictDragToAxis && "y" !== i[f].restrictDragToAxis && (i[f].x += e.dx), "x" !== e.restrictDragToAxis && "x" !== i[f].restrictDragToAxis && (i[f].y += e.dy));
            } else ("mouseup" !== c && "touchend" !== c) || (g.dragging && ((e.dragging = !1), (g.dragging = !1), E(a, b, e, "dragstop")), (b.drag = {}));
        }
        function A(b, c, d) {
            var e;
            c.cursors && (e = c.cursors[d]), -1 !== a.inArray(e, Fa.cursors) && (e = Fa.prefix + e), e && b.css({ cursor: e });
        }
        function B(a, b) {
            a.css({ cursor: b.cursor });
        }
        function C(a, b, c, d, e) {
            d[c] && b._running && !b._running[c] && ((b._running[c] = !0), d[c].call(a[0], b, e), (b._running[c] = !1));
        }
        function D(b, c) {
            return !(b.disableEvents || (b.intangible && -1 !== a.inArray(c, Ga)));
        }
        function E(a, b, c, d, e) {
            D(c, d) && ("mouseout" !== d && A(a, c, d), C(a, c, d, c, e), C(a, c, d, b.eventHooks, e), C(a, c, d, Ha.eventHooks, e));
        }
        function F(b, d, f, g) {
            var i,
                j,
                k,
                l = d._layer ? f : d;
            return (
                (d._args = f),
                (d.draggable || d.dragGroups) && ((d.layer = !0), (d.draggable = !0)),
                d._method || (g ? (d._method = g) : d.method ? (d._method = a.fn[d.method]) : d.type && (d._method = a.fn[Ca.drawings[d.type]])),
                d.layer && !d._layer
                    ? ((i = a(b)),
                        (j = r(b)),
                        (k = j.layers),
                        (null === l.name || (e(l.name) && void 0 === j.layer.names[l.name])) &&
                        (h(d),
                            (l = new c(d)),
                            (l.canvas = b),
                            (l.layer = !0),
                            (l._layer = !0),
                            (l._running = {}),
                            null !== l.data ? (l.data = pa({}, l.data)) : (l.data = {}),
                            null !== l.groups ? (l.groups = l.groups.slice(0)) : (l.groups = []),
                            v(i, j, l),
                            w(i, j, l),
                            s(i, j, l),
                            u(i, j, l),
                            (d._event = l._event),
                            l._method === a.fn.drawText && i.measureText(l),
                            null === l.index && (l.index = k.length),
                            k.splice(l.index, 0, l),
                            (d._args = l),
                            E(i, j, l, "add")))
                    : d.layer || h(d),
                l
            );
        }
        function G(a) {
            var b, c;
            for (c = 0; c < Fa.props.length; c += 1) (b = Fa.props[c]), (a[b] = a["_" + b]);
        }
        function H(a, b) {
            var c, d;
            for (d = 0; d < Fa.props.length; d += 1) (c = Fa.props[d]), void 0 !== a[c] && ((a["_" + c] = a[c]), (Fa.propsObj[c] = !0), b && delete a[c]);
        }
        function I(a, b, c) {
            var d, e, f, g;
            for (d in c)
                if (Object.prototype.hasOwnProperty.call(c, d) && ((e = c[d]), sa(e) && (c[d] = e.call(a, b, d)), "object" === ra(e) && ta(e))) {
                    for (f in e) Object.prototype.hasOwnProperty.call(e, f) && ((g = e[f]), void 0 !== b[d] && ((b[d + "." + f] = b[d][f]), (c[d + "." + f] = g)));
                    delete c[d];
                }
            return c;
        }
        function J(a) {
            var b;
            for (b in a) Object.prototype.hasOwnProperty.call(a, b) && -1 !== b.indexOf(".") && delete a[b];
        }
        function K(b) {
            var c,
                d,
                e = [],
                f = 1;
            return (
                "transparent" === b ? (b = "rgba(0, 0, 0, 0)") : b.match(/^([a-z]+|#[0-9a-f]+)$/gi) && ((d = ia.head), (c = d.style.color), (d.style.color = b), (b = a.css(d, "color")), (d.style.color = c)),
                b.match(/^rgb/gi) && ((e = b.match(/(\d+(\.\d+)?)/gi)), b.match(/%/gi) && (f = 2.55), (e[0] *= f), (e[1] *= f), (e[2] *= f), void 0 !== e[3] ? (e[3] = oa(e[3])) : (e[3] = 1)),
                e
            );
        }
        function L(a) {
            var b,
                c = 3;
            for ("array" !== ra(a.start) && ((a.start = K(a.start)), (a.end = K(a.end))), a.now = [], (1 === a.start[3] && 1 === a.end[3]) || (c = 4), b = 0; b < c; b += 1)
                (a.now[b] = a.start[b] + (a.end[b] - a.start[b]) * a.pos), b < 3 && (a.now[b] = va(a.now[b]));
            1 !== a.start[3] || 1 !== a.end[3] ? (a.now = "rgba(" + a.now.join(",") + ")") : (a.now.slice(0, 3), (a.now = "rgb(" + a.now.join(",") + ")")), a.elem.nodeName ? (a.elem.style[a.prop] = a.now) : (a.elem[a.prop] = a.now);
        }
        function M(a) {
            return Ca.touchEvents[a] && (a = Ca.touchEvents[a]), a;
        }
        function N(a) {
            return Ca.mouseEvents[a] && (a = Ca.mouseEvents[a]), a;
        }
        function O(a) {
            Ha.events[a] = function (b, c) {
                function d(a) {
                    (g.x = a.offsetX), (g.y = a.offsetY), (g.type = e), (g.event = a), b.drawLayers({ resetFire: !0 }), a.preventDefault();
                }
                var e, f, g;
                (g = c.event), (e = "mouseover" === a || "mouseout" === a ? "mousemove" : a), (f = M(e)), c.events[e] || (f !== e ? b.bind(e + ".jCanvas " + f + ".jCanvas", d) : b.bind(e + ".jCanvas", d), (c.events[e] = !0));
            };
        }
        function P(a, b, c) {
            var d, e, f, g, h, i, j, k;
            (d = c._args) &&
                ((e = r(a)),
                    (f = e.event),
                    null !== f.x &&
                    null !== f.y &&
                    ((i = f.x * e.pixelRatio),
                        (j = f.y * e.pixelRatio),
                        (g = b.isPointInStroke && !1 === d.closed && "transparent" === d.fillStyle ? b.isPointInStroke(i, j) : b.isPointInPath(i, j) || (b.isPointInStroke && b.isPointInStroke(i, j)))),
                    (h = e.transforms),
                    (d.eventX = f.x),
                    (d.eventY = f.y),
                    (d.event = f.event),
                    (k = e.transforms.rotate),
                    (i = d.eventX),
                    (j = d.eventY),
                    0 !== k ? ((d._eventX = i * ya(-k) - j * xa(-k)), (d._eventY = j * ya(-k) + i * xa(-k))) : ((d._eventX = i), (d._eventY = j)),
                    (d._eventX /= h.scaleX),
                    (d._eventY /= h.scaleY),
                    g && e.intersecting.push(d),
                    (d.intersects = Boolean(g)));
        }
        function Q(a, b, c) {
            (b._toRad = b.inDegrees ? ua / 180 : 1), a.translate(b.x, b.y), a.rotate(b.rotate * b._toRad), a.translate(-b.x, -b.y), c && (c.rotate += b.rotate * b._toRad);
        }
        function R(a, b, c) {
            1 !== b.scale && (b.scaleX = b.scaleY = b.scale), a.translate(b.x, b.y), a.scale(b.scaleX, b.scaleY), a.translate(-b.x, -b.y), c && ((c.scaleX *= b.scaleX), (c.scaleY *= b.scaleY));
        }
        function S(a, b, c) {
            b.translate && (b.translateX = b.translateY = b.translate), a.translate(b.translateX, b.translateY), c && ((c.translateX += b.translateX), (c.translateY += b.translateY));
        }
        function T(a) {
            for (; a < 0;) a += 2 * ua;
            return a;
        }
        function U(a, b) {
            return a.x + a.radius * ya(b);
        }
        function V(a, b) {
            return a.y + a.radius * xa(b);
        }
        function W(a, b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o;
            c === d ? ((m = 0), (n = 0)) : ((m = c.x), (n = c.y)),
                d.inDegrees || 360 !== d.end || (d.end = 2 * ua),
                (d.start *= c._toRad),
                (d.end *= c._toRad),
                (d.start -= ua / 2),
                (d.end -= ua / 2),
                (o = ua / 180),
                d.ccw && (o *= -1),
                (e = U(d, d.start + o)),
                (f = V(d, d.start + o)),
                (g = U(d, d.start)),
                (h = V(d, d.start)),
                Y(a, b, c, d, e, f, g, h),
                b.arc(d.x + m, d.y + n, d.radius, d.start, d.end, d.ccw),
                (i = U(d, d.end + o)),
                (j = V(d, d.end + o)),
                (k = U(d, d.end)),
                (l = V(d, d.end)),
                Z(a, b, c, d, k, l, i, j);
        }
        function X(a, b, c, d, e, f, g, h) {
            var i, j, k, l, m, n, o;
            d.arrowRadius &&
                !c.closed &&
                ((o = za(h - f, g - e)),
                    (o -= ua),
                    (m = c.strokeWidth * ya(o)),
                    (n = c.strokeWidth * xa(o)),
                    (i = g + d.arrowRadius * ya(o + d.arrowAngle / 2)),
                    (j = h + d.arrowRadius * xa(o + d.arrowAngle / 2)),
                    (k = g + d.arrowRadius * ya(o - d.arrowAngle / 2)),
                    (l = h + d.arrowRadius * xa(o - d.arrowAngle / 2)),
                    b.moveTo(i - m, j - n),
                    b.lineTo(g - m, h - n),
                    b.lineTo(k - m, l - n),
                    b.moveTo(g - m, h - n),
                    b.lineTo(g + m, h + n),
                    b.moveTo(g, h));
        }
        function Y(a, b, c, d, e, f, g, h) {
            d._arrowAngleConverted || ((d.arrowAngle *= c._toRad), (d._arrowAngleConverted = !0)), d.startArrow && X(a, b, c, d, e, f, g, h);
        }
        function Z(a, b, c, d, e, f, g, h) {
            d._arrowAngleConverted || ((d.arrowAngle *= c._toRad), (d._arrowAngleConverted = !0)), d.endArrow && X(a, b, c, d, e, f, g, h);
        }
        function $(a, b, c, d) {
            var e, f, g;
            for (e = 2, Y(a, b, c, d, d.x2 + c.x, d.y2 + c.y, d.x1 + c.x, d.y1 + c.y), void 0 !== d.x1 && void 0 !== d.y1 && b.moveTo(d.x1 + c.x, d.y1 + c.y); ;) {
                if (((f = d["x" + e]), (g = d["y" + e]), void 0 === f || void 0 === g)) break;
                b.lineTo(f + c.x, g + c.y), (e += 1);
            }
            (e -= 1), Z(a, b, c, d, d["x" + (e - 1)] + c.x, d["y" + (e - 1)] + c.y, d["x" + e] + c.x, d["y" + e] + c.y);
        }
        function _(a, b, c, d) {
            var e, f, g, h, i;
            for (e = 2, Y(a, b, c, d, d.cx1 + c.x, d.cy1 + c.y, d.x1 + c.x, d.y1 + c.y), void 0 !== d.x1 && void 0 !== d.y1 && b.moveTo(d.x1 + c.x, d.y1 + c.y); ;) {
                if (((f = d["x" + e]), (g = d["y" + e]), (h = d["cx" + (e - 1)]), (i = d["cy" + (e - 1)]), void 0 === f || void 0 === g || void 0 === h || void 0 === i)) break;
                b.quadraticCurveTo(h + c.x, i + c.y, f + c.x, g + c.y), (e += 1);
            }
            (e -= 1), Z(a, b, c, d, d["cx" + (e - 1)] + c.x, d["cy" + (e - 1)] + c.y, d["x" + e] + c.x, d["y" + e] + c.y);
        }
        function aa(a, b, c, d) {
            var e, f, g, h, i, j, k, l;
            for (e = 2, f = 1, Y(a, b, c, d, d.cx1 + c.x, d.cy1 + c.y, d.x1 + c.x, d.y1 + c.y), void 0 !== d.x1 && void 0 !== d.y1 && b.moveTo(d.x1 + c.x, d.y1 + c.y); ;) {
                if (((g = d["x" + e]), (h = d["y" + e]), (i = d["cx" + f]), (j = d["cy" + f]), (k = d["cx" + (f + 1)]), (l = d["cy" + (f + 1)]), void 0 === g || void 0 === h || void 0 === i || void 0 === j || void 0 === k || void 0 === l))
                    break;
                b.bezierCurveTo(i + c.x, j + c.y, k + c.x, l + c.y, g + c.x, h + c.y), (e += 1), (f += 2);
            }
            (e -= 1), (f -= 2), Z(a, b, c, d, d["cx" + (f + 1)] + c.x, d["cy" + (f + 1)] + c.y, d["x" + e] + c.x, d["y" + e] + c.y);
        }
        function ba(a, b, c) {
            return (b *= a._toRad), (b -= ua / 2), c * ya(b);
        }
        function ca(a, b, c) {
            return (b *= a._toRad), (b -= ua / 2), c * xa(b);
        }
        function da(a, b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o;
            for (
                c === d ? ((h = 0), (i = 0)) : ((h = c.x), (i = c.y)), e = 1, j = l = n = d.x + h, k = m = o = d.y + i, Y(a, b, c, d, j + ba(c, d.a1, d.l1), k + ca(c, d.a1, d.l1), j, k), void 0 !== d.x && void 0 !== d.y && b.moveTo(j, k);
                ;

            ) {
                if (((f = d["a" + e]), (g = d["l" + e]), void 0 === f || void 0 === g)) break;
                (l = n), (m = o), (n += ba(c, f, g)), (o += ca(c, f, g)), b.lineTo(n, o), (e += 1);
            }
            Z(a, b, c, d, l, m, n, o);
        }
        function ea(a, b, c) {
            isNaN(na(c.fontSize)) || (c.fontSize += "px"), (b.font = c.fontStyle + " " + c.fontSize + " " + c.fontFamily);
        }
        function fa(b, c, d, e) {
            var f,
                g,
                h,
                i = Da.propCache;
            if (i.text === d.text && i.fontStyle === d.fontStyle && i.fontSize === d.fontSize && i.fontFamily === d.fontFamily && i.maxWidth === d.maxWidth && i.lineHeight === d.lineHeight) (d.width = i.width), (d.height = i.height);
            else {
                for (d.width = c.measureText(e[0]).width, h = 1; h < e.length; h += 1) (g = c.measureText(e[h]).width) > d.width && (d.width = g);
                (f = b.style.fontSize), (b.style.fontSize = d.fontSize), (d.height = oa(a.css(b, "fontSize")) * e.length * d.lineHeight), (b.style.fontSize = f);
            }
        }
        function ga(a, b) {
            var c,
                d,
                e,
                f,
                g,
                h,
                i = String(b.text),
                j = b.maxWidth,
                k = i.split("\n"),
                l = [];
            for (e = 0; e < k.length; e += 1) {
                if (((f = k[e]), (g = f.split(" ")), (c = []), (d = ""), 1 === g.length || a.measureText(f).width < j)) c = [f];
                else {
                    for (h = 0; h < g.length; h += 1) a.measureText(d + g[h]).width > j && ("" !== d && c.push(d), (d = "")), (d += g[h]), h !== g.length - 1 && (d += " ");
                    c.push(d);
                }
                l = l.concat(
                    c
                        .join("\n")
                        .replace(/((\n))|($)/gi, "$2")
                        .split("\n")
                );
            }
            return l;
        }
        var ha,
            ia = b.document,
            ja = b.Image,
            ka = b.Array,
            la = b.getComputedStyle,
            ma = b.Math,
            na = b.Number,
            oa = b.parseFloat,
            pa = a.extend,
            qa = a.inArray,
            ra = function (a) {
                return Object.prototype.toString.call(a).slice(8, -1).toLowerCase();
            },
            sa = a.isFunction,
            ta = a.isPlainObject,
            ua = ma.PI,
            va = ma.round,
            wa = ma.abs,
            xa = ma.sin,
            ya = ma.cos,
            za = ma.atan2,
            Aa = ka.prototype.slice,
            Ba = a.event.fix,
            Ca = {},
            Da = { dataCache: {}, propCache: {}, imageCache: {} },
            Ea = { rotate: 0, scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, masks: [] },
            Fa = {},
            Ga = ["mousedown", "mousemove", "mouseup", "mouseover", "mouseout", "touchstart", "touchmove", "touchend"],
            Ha = { events: {}, eventHooks: {}, future: {} };
        (d.baseDefaults = {
            align: "center",
            arrowAngle: 90,
            arrowRadius: 0,
            autosave: !0,
            baseline: "middle",
            bringToFront: !1,
            ccw: !1,
            closed: !1,
            compositing: "source-over",
            concavity: 0,
            cornerRadius: 0,
            count: 1,
            cropFromCenter: !0,
            crossOrigin: null,
            cursors: null,
            disableEvents: !1,
            draggable: !1,
            dragGroups: null,
            groups: null,
            data: null,
            dx: null,
            dy: null,
            end: 360,
            eventX: null,
            eventY: null,
            fillStyle: "transparent",
            fontStyle: "normal",
            fontSize: "12pt",
            fontFamily: "sans-serif",
            fromCenter: !0,
            height: null,
            imageSmoothing: !0,
            inDegrees: !0,
            intangible: !1,
            index: null,
            letterSpacing: null,
            lineHeight: 1,
            layer: !1,
            mask: !1,
            maxWidth: null,
            miterLimit: 10,
            name: null,
            opacity: 1,
            r1: null,
            r2: null,
            radius: 0,
            repeat: "repeat",
            respectAlign: !1,
            restrictDragToAxis: null,
            rotate: 0,
            rounded: !1,
            scale: 1,
            scaleX: 1,
            scaleY: 1,
            shadowBlur: 0,
            shadowColor: "transparent",
            shadowStroke: !1,
            shadowX: 0,
            shadowY: 0,
            sHeight: null,
            sides: 0,
            source: "",
            spread: 0,
            start: 0,
            strokeCap: "butt",
            strokeDash: null,
            strokeDashOffset: 0,
            strokeJoin: "miter",
            strokeStyle: "transparent",
            strokeWidth: 1,
            sWidth: null,
            sx: null,
            sy: null,
            text: "",
            translate: 0,
            translateX: 0,
            translateY: 0,
            type: null,
            visible: !0,
            width: null,
            x: 0,
            y: 0,
        }),
            (ha = new d()),
            (c.prototype = ha),
            (Ha.extend = function (b) {
                return (
                    b.name &&
                    (b.props && pa(ha, b.props),
                        (a.fn[b.name] = function a(d) {
                            var e,
                                f,
                                h,
                                i,
                                j = this;
                            for (f = 0; f < j.length; f += 1) (e = j[f]), (h = g(e)) && ((i = new c(d)), F(e, i, d, a), m(e, h, i), b.fn.call(e, h, i));
                            return j;
                        }),
                        b.type && (Ca.drawings[b.type] = b.name)),
                    a.fn[b.name]
                );
            }),
            (a.fn.getEventHooks = function () {
                var a,
                    b,
                    c = this,
                    d = {};
                return 0 !== c.length && ((a = c[0]), (b = r(a)), (d = b.eventHooks)), d;
            }),
            (a.fn.setEventHooks = function (a) {
                var b,
                    c,
                    d = this;
                for (b = 0; b < d.length; b += 1) (c = r(d[b])), pa(c.eventHooks, a);
                return d;
            }),
            (a.fn.getLayers = function (a) {
                var b,
                    c,
                    d,
                    e,
                    f,
                    g = this,
                    h = [];
                if (0 !== g.length)
                    if (((b = g[0]), (c = r(b)), (d = c.layers), sa(a))) for (f = 0; f < d.length; f += 1) (e = d[f]), a.call(b, e) && h.push(e);
                    else h = d;
                return h;
            }),
            (a.fn.getLayer = function (a) {
                var b,
                    c,
                    d,
                    f,
                    g,
                    h,
                    i = this;
                if (0 !== i.length)
                    if (((b = i[0]), (c = r(b)), (d = c.layers), (h = ra(a)), a && a.layer)) f = a;
                    else if ("number" === h) a < 0 && (a = d.length + a), (f = d[a]);
                    else if ("regexp" === h) {
                        for (g = 0; g < d.length; g += 1)
                            if (e(d[g].name) && d[g].name.match(a)) {
                                f = d[g];
                                break;
                            }
                    } else f = c.layer.names[a];
                return f;
            }),
            (a.fn.getLayerGroup = function (a) {
                var b,
                    c,
                    d,
                    e,
                    f,
                    g = this,
                    h = ra(a);
                if (0 !== g.length)
                    if (((b = g[0]), "array" === h)) f = a;
                    else if ("regexp" === h) {
                        (c = r(b)), (d = c.layer.groups);
                        for (e in d)
                            if (e.match(a)) {
                                f = d[e];
                                break;
                            }
                    } else (c = r(b)), (f = c.layer.groups[a]);
                return f;
            }),
            (a.fn.getLayerIndex = function (a) {
                var b = this,
                    c = b.getLayers(),
                    d = b.getLayer(a);
                return qa(d, c);
            }),
            (a.fn.setLayer = function (b, c) {
                var d,
                    e,
                    g,
                    i,
                    j,
                    k,
                    l,
                    m = this;
                for (e = 0; e < m.length; e += 1)
                    if (((d = a(m[e])), (g = r(m[e])), (i = a(m[e]).getLayer(b)))) {
                        v(d, g, i, c), w(d, g, i, c), h(c);
                        for (j in c)
                            Object.prototype.hasOwnProperty.call(c, j) &&
                                ((k = c[j]),
                                    (l = ra(k)),
                                    "object" === l && ta(k)
                                        ? ((i[j] = pa({}, k)), h(i[j]))
                                        : "array" === l
                                            ? (i[j] = k.slice(0))
                                            : "string" === l
                                                ? 0 === k.indexOf("+=")
                                                    ? (i[j] += oa(k.substr(2)))
                                                    : 0 === k.indexOf("-=")
                                                        ? (i[j] -= oa(k.substr(2)))
                                                        : !isNaN(k) && f(k) && "text" !== j
                                                            ? (i[j] = oa(k))
                                                            : (i[j] = k)
                                                : (i[j] = k));
                        s(d, g, i), u(d, g, i), !1 === a.isEmptyObject(c) && E(d, g, i, "change", c);
                    }
                return m;
            }),
            (a.fn.setLayers = function (b, c) {
                var d,
                    e,
                    f,
                    g,
                    h = this;
                for (e = 0; e < h.length; e += 1) for (d = a(h[e]), f = d.getLayers(c), g = 0; g < f.length; g += 1) d.setLayer(f[g], b);
                return h;
            }),
            (a.fn.setLayerGroup = function (b, c) {
                var d,
                    e,
                    f,
                    g,
                    h = this;
                for (e = 0; e < h.length; e += 1) if (((d = a(h[e])), (f = d.getLayerGroup(b)))) for (g = 0; g < f.length; g += 1) d.setLayer(f[g], c);
                return h;
            }),
            (a.fn.moveLayer = function (b, c) {
                var d,
                    e,
                    f,
                    g,
                    h,
                    i = this;
                for (e = 0; e < i.length; e += 1)
                    (d = a(i[e])), (f = r(i[e])), (g = f.layers), (h = d.getLayer(b)) && ((h.index = qa(h, g)), g.splice(h.index, 1), g.splice(c, 0, h), c < 0 && (c = g.length + c), (h.index = c), E(d, f, h, "move"));
                return i;
            }),
            (a.fn.removeLayer = function (b) {
                var c,
                    d,
                    e,
                    f,
                    g,
                    h = this;
                for (d = 0; d < h.length; d += 1)
                    (c = a(h[d])), (e = r(h[d])), (f = c.getLayers()), (g = c.getLayer(b)) && ((g.index = qa(g, f)), f.splice(g.index, 1), delete g._layer, v(c, e, g, { name: null }), w(c, e, g, { groups: null }), E(c, e, g, "remove"));
                return h;
            }),
            (a.fn.removeLayers = function (b) {
                var c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i = this;
                for (d = 0; d < i.length; d += 1) {
                    for (c = a(i[d]), e = r(i[d]), f = c.getLayers(b), h = 0; h < f.length; h += 1) (g = f[h]), c.removeLayer(g), (h -= 1);
                    (e.layer.names = {}), (e.layer.groups = {});
                }
                return i;
            }),
            (a.fn.removeLayerGroup = function (b) {
                var c,
                    d,
                    e,
                    f,
                    g = this;
                if (void 0 !== b) for (d = 0; d < g.length; d += 1) if (((c = a(g[d])), (e = c.getLayerGroup(b)))) for (e = e.slice(0), f = 0; f < e.length; f += 1) c.removeLayer(e[f]);
                return g;
            }),
            (a.fn.addLayerToGroup = function (b, c) {
                var d,
                    e,
                    f,
                    g = this,
                    h = [c];
                for (e = 0; e < g.length; e += 1) (d = a(g[e])), (f = d.getLayer(b)), f.groups && ((h = f.groups.slice(0)), -1 === qa(c, f.groups) && h.push(c)), d.setLayer(f, { groups: h });
                return g;
            }),
            (a.fn.removeLayerFromGroup = function (b, c) {
                var d,
                    e,
                    f,
                    g,
                    h = this,
                    i = [];
                for (e = 0; e < h.length; e += 1) (d = a(h[e])), (f = d.getLayer(b)), f.groups && -1 !== (g = qa(c, f.groups)) && ((i = f.groups.slice(0)), i.splice(g, 1), d.setLayer(f, { groups: i }));
                return h;
            }),
            (Fa.cursors = ["grab", "grabbing", "zoom-in", "zoom-out"]),
            (Fa.prefix = (function () {
                var a = la(ia.documentElement, "");
                return (
                    "-" +
                    (Aa.call(a)
                        .join("")
                        .match(/-(moz|webkit|ms)-/) ||
                        ("" === a.OLink && ["", "o"]))[1] +
                    "-"
                );
            })()),
            (a.fn.triggerLayerEvent = function (b, c) {
                var d,
                    e,
                    f,
                    g = this;
                for (e = 0; e < g.length; e += 1) (d = a(g[e])), (f = r(g[e])), (b = d.getLayer(b)) && E(d, f, b, c);
                return g;
            }),
            (a.fn.drawLayer = function (b) {
                var c,
                    d,
                    e,
                    f,
                    h = this;
                for (c = 0; c < h.length; c += 1) (e = a(h[c])), (d = g(h[c])) && ((f = e.getLayer(b)), y(e, d, f));
                return h;
            }),
            (a.fn.drawLayers = function (b) {
                var c,
                    d,
                    e,
                    f,
                    h,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q,
                    s = this,
                    t = b || {};
                for (l = t.index, l || (l = 0), d = 0; d < s.length; d += 1)
                    if (((c = a(s[d])), (e = g(s[d])))) {
                        for (n = r(s[d]), !1 !== t.clear && c.clearCanvas(), f = n.layers, k = l; k < f.length; k += 1)
                            if (((h = f[k]), (h.index = k), t.resetFire && (h._fired = !1), y(c, e, h, k + 1), (h._masks = n.transforms.masks.slice(0)), h._method === a.fn.drawImage && h.visible)) {
                                q = !0;
                                break;
                            }
                        if (q) break;
                        (m = k),
                            (h = x(n)),
                            (o = n.event),
                            (p = o.type),
                            n.drag.layer && z(c, n, p),
                            (j = n.lastIntersected),
                            null === j || h === j || !j._hovered || j._fired || n.drag.dragging || ((n.lastIntersected = null), (j._fired = !0), (j._hovered = !1), E(c, n, j, "mouseout"), B(c, n)),
                            h &&
                            (h[p] || (p = N(p)),
                                h._event &&
                                h.intersects &&
                                ((n.lastIntersected = h),
                                    (h.mouseover || h.mouseout || h.cursors) && !n.drag.dragging && (h._hovered || h._fired || ((h._fired = !0), (h._hovered = !0), E(c, n, h, "mouseover"))),
                                    h._fired || ((h._fired = !0), (o.type = null), E(c, n, h, p)),
                                    !h.draggable || h.disableEvents || ("mousedown" !== p && "touchstart" !== p) || (n.drag.layer = h))),
                            null !== h || n.drag.dragging || B(c, n),
                            m === f.length && ((n.intersecting.length = 0), (n.transforms = i(Ea)), (n.savedTransforms.length = 0));
                    }
                return s;
            }),
            (a.fn.addLayer = function (a) {
                var b,
                    d,
                    e = this;
                for (b = 0; b < e.length; b += 1) g(e[b]) && ((d = new c(a)), (d.layer = !0), F(e[b], d, a));
                return e;
            }),
            (Fa.props = ["width", "height", "opacity", "lineHeight"]),
            (Fa.propsObj = {}),
            (a.fn.animateLayer = function () {
                var b,
                    c,
                    d,
                    e,
                    f,
                    h = this,
                    i = Aa.call(arguments, 0);
                for (
                    "object" === ra(i[2])
                        ? (i.splice(2, 0, i[2].duration || null), i.splice(3, 0, i[3].easing || null), i.splice(4, 0, i[4].complete || null), i.splice(5, 0, i[5].step || null))
                        : (void 0 === i[2] ? (i.splice(2, 0, null), i.splice(3, 0, null), i.splice(4, 0, null)) : sa(i[2]) && (i.splice(2, 0, null), i.splice(3, 0, null)),
                            void 0 === i[3] ? ((i[3] = null), i.splice(4, 0, null)) : sa(i[3]) && i.splice(3, 0, null)),
                    c = 0;
                    c < h.length;
                    c += 1
                )
                    (b = a(h[c])),
                        g(h[c]) &&
                        ((d = r(h[c])),
                            (e = b.getLayer(i[0])) &&
                            e._method !== a.fn.draw &&
                            ((f = pa({}, i[1])),
                                (f = I(h[c], e, f)),
                                H(f, !0),
                                H(e),
                                (e.style = Fa.propsObj),
                                a(e).animate(f, {
                                    duration: i[2],
                                    easing: a.easing[i[3]] ? i[3] : null,
                                    complete: (function (a, b, c) {
                                        return function () {
                                            G(c), J(c), (b.animating && b.animated !== c) || a.drawLayers(), (c._animating = !1), (b.animating = !1), (b.animated = null), i[4] && i[4].call(a[0], c), E(a, b, c, "animateend");
                                        };
                                    })(b, d, e),
                                    step: (function (a, b, c) {
                                        return function (d, e) {
                                            var f,
                                                g,
                                                h,
                                                j = !1;
                                            "_" === e.prop[0] && ((j = !0), (e.prop = e.prop.replace("_", "")), (c[e.prop] = c["_" + e.prop])),
                                                -1 !== e.prop.indexOf(".") && ((f = e.prop.split(".")), (g = f[0]), (h = f[1]), c[g] && (c[g][h] = e.now)),
                                                c._pos !== e.pos && ((c._pos = e.pos), c._animating || b.animating || ((c._animating = !0), (b.animating = !0), (b.animated = c)), (b.animating && b.animated !== c) || a.drawLayers()),
                                                i[5] && i[5].call(a[0], d, e, c),
                                                E(a, b, c, "animate", e),
                                                j && (e.prop = "_" + e.prop);
                                        };
                                    })(b, d, e),
                                }),
                                E(b, d, e, "animatestart")));
                return h;
            }),
            (a.fn.animateLayerGroup = function (b) {
                var c,
                    d,
                    e,
                    f,
                    g = this,
                    h = Aa.call(arguments, 0);
                for (d = 0; d < g.length; d += 1) if (((c = a(g[d])), (e = c.getLayerGroup(b)))) for (f = 0; f < e.length; f += 1) (h[0] = e[f]), c.animateLayer.apply(c, h);
                return g;
            }),
            (a.fn.delayLayer = function (b, c) {
                var d,
                    e,
                    f,
                    g,
                    h = this;
                for (c = c || 0, e = 0; e < h.length; e += 1) (d = a(h[e])), (f = r(h[e])), (g = d.getLayer(b)) && (a(g).delay(c), E(d, f, g, "delay"));
                return h;
            }),
            (a.fn.delayLayerGroup = function (b, c) {
                var d,
                    e,
                    f,
                    g,
                    h,
                    i = this;
                for (c = c || 0, e = 0; e < i.length; e += 1) if (((d = a(i[e])), (f = d.getLayerGroup(b)))) for (h = 0; h < f.length; h += 1) (g = f[h]), d.delayLayer(g, c);
                return i;
            }),
            (a.fn.stopLayer = function (b, c) {
                var d,
                    e,
                    f,
                    g,
                    h = this;
                for (e = 0; e < h.length; e += 1) (d = a(h[e])), (f = r(h[e])), (g = d.getLayer(b)) && (a(g).stop(c), E(d, f, g, "stop"));
                return h;
            }),
            (a.fn.stopLayerGroup = function (b, c) {
                var d,
                    e,
                    f,
                    g,
                    h,
                    i = this;
                for (e = 0; e < i.length; e += 1) if (((d = a(i[e])), (f = d.getLayerGroup(b)))) for (h = 0; h < f.length; h += 1) (g = f[h]), d.stopLayer(g, c);
                return i;
            }),
            (function (b) {
                var c;
                for (c = 0; c < b.length; c += 1) a.fx.step[b[c]] = L;
            })(["color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "fillStyle", "outlineColor", "strokeStyle", "shadowColor"]),
            (Ca.touchEvents = { mousedown: "touchstart", mouseup: "touchend", mousemove: "touchmove" }),
            (Ca.mouseEvents = { touchstart: "mousedown", touchend: "mouseup", touchmove: "mousemove" }),
            (function (a) {
                var b;
                for (b = 0; b < a.length; b += 1) O(a[b]);
            })(["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "touchstart", "touchmove", "touchend", "contextmenu"]),
            (a.event.fix = function (b) {
                var c, d, e;
                if (((b = Ba.call(a.event, b)), (d = b.originalEvent)))
                    if (((e = d.changedTouches), void 0 !== b.pageX && void 0 === b.offsetX)) {
                        c = a(b.currentTarget).offset();
                        try {
                            c && ((b.offsetX = b.pageX - c.left), (b.offsetY = b.pageY - c.top));
                        } catch (a) { }
                    } else if (e)
                        try {
                            (c = a(b.currentTarget).offset()), c && ((b.offsetX = e[0].pageX - c.left), (b.offsetY = e[0].pageY - c.top));
                        } catch (a) { }
                return b;
            }),
            (Ca.drawings = {
                arc: "drawArc",
                bezier: "drawBezier",
                ellipse: "drawEllipse",
                function: "draw",
                image: "drawImage",
                line: "drawLine",
                path: "drawPath",
                polygon: "drawPolygon",
                slice: "drawSlice",
                quadratic: "drawQuadratic",
                rectangle: "drawRect",
                text: "drawText",
                vector: "drawVector",
                save: "saveCanvas",
                restore: "restoreCanvas",
                rotate: "rotateCanvas",
                scale: "scaleCanvas",
                translate: "translateCanvas",
            }),
            (a.fn.draw = function a(b) {
                var d,
                    e,
                    f = this,
                    h = new c(b);
                if (Ca.drawings[h.type] && "function" !== h.type) f[Ca.drawings[h.type]](b);
                else for (d = 0; d < f.length; d += 1) (e = g(f[d])) && ((h = new c(b)), F(f[d], h, b, a), h.visible && h.fn && h.fn.call(f[d], e, h));
                return f;
            }),
            (a.fn.clearCanvas = function a(b) {
                var d,
                    e,
                    f = this,
                    h = new c(b);
                for (d = 0; d < f.length; d += 1)
                    (e = g(f[d])) &&
                        (null === h.width || null === h.height
                            ? (e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, f[d].width, f[d].height), e.restore())
                            : (F(f[d], h, b, a), q(f[d], e, h, h.width, h.height), e.clearRect(h.x - h.width / 2, h.y - h.height / 2, h.width, h.height), o(e, h)));
                return f;
            }),
            (a.fn.saveCanvas = function a(b) {
                var d,
                    e,
                    f,
                    h,
                    i,
                    k = this;
                for (d = 0; d < k.length; d += 1) if ((e = g(k[d]))) for (h = r(k[d]), f = new c(b), F(k[d], f, b, a), i = 0; i < f.count; i += 1) j(e, h);
                return k;
            }),
            (a.fn.restoreCanvas = function a(b) {
                var d,
                    e,
                    f,
                    h,
                    i,
                    j = this;
                for (d = 0; d < j.length; d += 1) if ((e = g(j[d]))) for (h = r(j[d]), f = new c(b), F(j[d], f, b, a), i = 0; i < f.count; i += 1) k(e, h);
                return j;
            }),
            (a.fn.rotateCanvas = function a(b) {
                var d,
                    e,
                    f,
                    h,
                    i = this;
                for (d = 0; d < i.length; d += 1) (e = g(i[d])) && ((h = r(i[d])), (f = new c(b)), F(i[d], f, b, a), f.autosave && j(e, h), Q(e, f, h.transforms));
                return i;
            }),
            (a.fn.scaleCanvas = function a(b) {
                var d,
                    e,
                    f,
                    h,
                    i = this;
                for (d = 0; d < i.length; d += 1) (e = g(i[d])) && ((h = r(i[d])), (f = new c(b)), F(i[d], f, b, a), f.autosave && j(e, h), R(e, f, h.transforms));
                return i;
            }),
            (a.fn.translateCanvas = function a(b) {
                var d,
                    e,
                    f,
                    h,
                    i = this;
                for (d = 0; d < i.length; d += 1) (e = g(i[d])) && ((h = r(i[d])), (f = new c(b)), F(i[d], f, b, a), f.autosave && j(e, h), S(e, f, h.transforms));
                return i;
            }),
            (a.fn.drawRect = function a(b) {
                var d,
                    e,
                    f,
                    h,
                    i,
                    j,
                    k,
                    l,
                    n,
                    o = this;
                for (d = 0; d < o.length; d += 1)
                    (e = g(o[d])) &&
                        ((f = new c(b)),
                            F(o[d], f, b, a),
                            f.visible &&
                            (q(o[d], e, f, f.width, f.height),
                                m(o[d], e, f),
                                e.beginPath(),
                                f.width &&
                                f.height &&
                                ((h = f.x - f.width / 2),
                                    (i = f.y - f.height / 2),
                                    (l = wa(f.cornerRadius)),
                                    l
                                        ? ((j = f.x + f.width / 2),
                                            (k = f.y + f.height / 2),
                                            f.width < 0 && ((n = h), (h = j), (j = n)),
                                            f.height < 0 && ((n = i), (i = k), (k = n)),
                                            j - h - 2 * l < 0 && (l = (j - h) / 2),
                                            k - i - 2 * l < 0 && (l = (k - i) / 2),
                                            e.moveTo(h + l, i),
                                            e.lineTo(j - l, i),
                                            e.arc(j - l, i + l, l, (3 * ua) / 2, 2 * ua, !1),
                                            e.lineTo(j, k - l),
                                            e.arc(j - l, k - l, l, 0, ua / 2, !1),
                                            e.lineTo(h + l, k),
                                            e.arc(h + l, k - l, l, ua / 2, ua, !1),
                                            e.lineTo(h, i + l),
                                            e.arc(h + l, i + l, l, ua, (3 * ua) / 2, !1),
                                            (f.closed = !0))
                                        : e.rect(h, i, f.width, f.height)),
                                P(o[d], e, f),
                                p(o[d], e, f)));
                return o;
            }),
            (a.fn.drawArc = function a(b) {
                var d,
                    e,
                    f,
                    h = this;
                for (d = 0; d < h.length; d += 1) (e = g(h[d])) && ((f = new c(b)), F(h[d], f, b, a), f.visible && (q(h[d], e, f, 2 * f.radius), m(h[d], e, f), e.beginPath(), W(h[d], e, f, f), P(h[d], e, f), p(h[d], e, f)));
                return h;
            }),
            (a.fn.drawEllipse = function a(b) {
                var d,
                    e,
                    f,
                    h,
                    i,
                    j = this;
                for (d = 0; d < j.length; d += 1)
                    (e = g(j[d])) &&
                        ((f = new c(b)),
                            F(j[d], f, b, a),
                            f.visible &&
                            (q(j[d], e, f, f.width, f.height),
                                m(j[d], e, f),
                                (h = f.width * (4 / 3)),
                                (i = f.height),
                                e.beginPath(),
                                e.moveTo(f.x, f.y - i / 2),
                                e.bezierCurveTo(f.x - h / 2, f.y - i / 2, f.x - h / 2, f.y + i / 2, f.x, f.y + i / 2),
                                e.bezierCurveTo(f.x + h / 2, f.y + i / 2, f.x + h / 2, f.y - i / 2, f.x, f.y - i / 2),
                                P(j[d], e, f),
                                (f.closed = !0),
                                p(j[d], e, f)));
                return j;
            }),
            (a.fn.drawPolygon = function a(b) {
                var d,
                    e,
                    f,
                    h,
                    i,
                    j,
                    k,
                    l,
                    n,
                    o,
                    r = this;
                for (d = 0; d < r.length; d += 1)
                    if ((e = g(r[d])) && ((f = new c(b)), F(r[d], f, b, a), f.visible)) {
                        for (q(r[d], e, f, 2 * f.radius), m(r[d], e, f), i = (2 * ua) / f.sides, j = i / 2, h = j + ua / 2, k = f.radius * ya(j), e.beginPath(), o = 0; o < f.sides; o += 1)
                            (l = f.x + f.radius * ya(h)),
                                (n = f.y + f.radius * xa(h)),
                                e.lineTo(l, n),
                                f.concavity && ((l = f.x + (k + -k * f.concavity) * ya(h + j)), (n = f.y + (k + -k * f.concavity) * xa(h + j)), e.lineTo(l, n)),
                                (h += i);
                        P(r[d], e, f), (f.closed = !0), p(r[d], e, f);
                    }
                return r;
            }),
            (a.fn.drawSlice = function a(b) {
                var d,
                    e,
                    f,
                    h,
                    i,
                    j,
                    k = this;
                for (d = 0; d < k.length; d += 1)
                    (e = g(k[d])) &&
                        ((f = new c(b)),
                            F(k[d], f, b, a),
                            f.visible &&
                            (q(k[d], e, f, 2 * f.radius),
                                m(k[d], e, f),
                                (f.start *= f._toRad),
                                (f.end *= f._toRad),
                                (f.start -= ua / 2),
                                (f.end -= ua / 2),
                                (f.start = T(f.start)),
                                (f.end = T(f.end)),
                                f.end < f.start && (f.end += 2 * ua),
                                (h = (f.start + f.end) / 2),
                                (i = f.radius * f.spread * ya(h)),
                                (j = f.radius * f.spread * xa(h)),
                                (f.x += i),
                                (f.y += j),
                                e.beginPath(),
                                e.arc(f.x, f.y, f.radius, f.start, f.end, f.ccw),
                                e.lineTo(f.x, f.y),
                                P(k[d], e, f),
                                (f.closed = !0),
                                p(k[d], e, f)));
                return k;
            }),
            (a.fn.drawLine = function a(b) {
                var d,
                    e,
                    f,
                    h = this;
                for (d = 0; d < h.length; d += 1) (e = g(h[d])) && ((f = new c(b)), F(h[d], f, b, a), f.visible && (q(h[d], e, f), m(h[d], e, f), e.beginPath(), $(h[d], e, f, f), P(h[d], e, f), p(h[d], e, f)));
                return h;
            }),
            (a.fn.drawQuadratic = function a(b) {
                var d,
                    e,
                    f,
                    h = this;
                for (d = 0; d < h.length; d += 1) (e = g(h[d])) && ((f = new c(b)), F(h[d], f, b, a), f.visible && (q(h[d], e, f), m(h[d], e, f), e.beginPath(), _(h[d], e, f, f), P(h[d], e, f), p(h[d], e, f)));
                return h;
            }),
            (a.fn.drawBezier = function a(b) {
                var d,
                    e,
                    f,
                    h = this;
                for (d = 0; d < h.length; d += 1) (e = g(h[d])) && ((f = new c(b)), F(h[d], f, b, a), f.visible && (q(h[d], e, f), m(h[d], e, f), e.beginPath(), aa(h[d], e, f, f), P(h[d], e, f), p(h[d], e, f)));
                return h;
            }),
            (a.fn.drawVector = function a(b) {
                var d,
                    e,
                    f,
                    h = this;
                for (d = 0; d < h.length; d += 1) (e = g(h[d])) && ((f = new c(b)), F(h[d], f, b, a), f.visible && (q(h[d], e, f), m(h[d], e, f), e.beginPath(), da(h[d], e, f, f), P(h[d], e, f), p(h[d], e, f)));
                return h;
            }),
            (a.fn.drawPath = function a(b) {
                var d,
                    e,
                    f,
                    h,
                    i,
                    j = this;
                for (d = 0; d < j.length; d += 1)
                    if ((e = g(j[d])) && ((f = new c(b)), F(j[d], f, b, a), f.visible)) {
                        for (q(j[d], e, f), m(j[d], e, f), e.beginPath(), h = 1; ;) {
                            if (void 0 === (i = f["p" + h])) break;
                            (i = new c(i)),
                                "line" === i.type ? $(j[d], e, f, i) : "quadratic" === i.type ? _(j[d], e, f, i) : "bezier" === i.type ? aa(j[d], e, f, i) : "vector" === i.type ? da(j[d], e, f, i) : "arc" === i.type && W(j[d], e, f, i),
                                (h += 1);
                        }
                        P(j[d], e, f), p(j[d], e, f);
                    }
                return j;
            }),
            (a.fn.drawText = function a(b) {
                var d,
                    e,
                    f,
                    h,
                    i,
                    j,
                    k,
                    l,
                    n,
                    p,
                    r,
                    s,
                    t,
                    u,
                    v = this;
                for (d = 0; d < v.length; d += 1)
                    if ((e = g(v[d])) && ((f = new c(b)), F(v[d], f, b, a), f.visible)) {
                        if (
                            ((e.textBaseline = f.baseline),
                                (e.textAlign = f.align),
                                ea(v[d], e, f),
                                (i = null !== f.maxWidth ? ga(e, f) : f.text.toString().split("\n")),
                                fa(v[d], e, f, i),
                                h && ((h.width = f.width), (h.height = f.height)),
                                q(v[d], e, f, f.width, f.height),
                                m(v[d], e, f),
                                (t = f.x),
                                "left" === f.align ? (f.respectAlign ? (f.x += f.width / 2) : (t -= f.width / 2)) : "right" === f.align && (f.respectAlign ? (f.x -= f.width / 2) : (t += f.width / 2)),
                                f.radius)
                        )
                            for (l = oa(f.fontSize), null === f.letterSpacing && (f.letterSpacing = l / 500), k = 0; k < i.length; k += 1) {
                                for (e.save(), e.translate(f.x, f.y), j = i[k], f.flipArcText && ((p = j.split("")), p.reverse(), (j = p.join(""))), n = j.length, e.rotate((-ua * f.letterSpacing * (n - 1)) / 2), s = 0; s < n; s += 1)
                                    (r = j[s]),
                                        0 !== s && e.rotate(ua * f.letterSpacing),
                                        e.save(),
                                        e.translate(0, -f.radius),
                                        f.flipArcText && e.scale(-1, -1),
                                        e.fillText(r, 0, 0),
                                        "transparent" !== f.fillStyle && (e.shadowColor = "transparent"),
                                        0 !== f.strokeWidth && e.strokeText(r, 0, 0),
                                        e.restore();
                                (f.radius -= l), (f.letterSpacing += l / (1e3 * ua)), e.restore();
                            }
                        else
                            for (k = 0; k < i.length; k += 1)
                                (j = i[k]),
                                    (u = (f.y + (k * f.height) / i.length - ((i.length - 1) * f.height) / i.length) / 2),
                                    (e.shadowColor = f.shadowColor),
                                    e.fillText(j, t, u),
                                    "transparent" !== f.fillStyle && (e.shadowColor = "transparent"),
                                    0 !== f.strokeWidth && e.strokeText(j, t, u);
                        (u = 0),
                            "top" === f.baseline ? (u += f.height / 2) : "bottom" === f.baseline && (u -= f.height / 2),
                            f._event && (e.beginPath(), e.rect(f.x - f.width / 2, f.y - f.height / 2 + u, f.width, f.height), P(v[d], e, f), e.closePath()),
                            o(e, f);
                    }
                return (Da.propCache = f), v;
            }),
            (a.fn.measureText = function (a) {
                var b,
                    d,
                    e,
                    f = this;
                return (d = f.getLayer(a)), (!d || (d && !d._layer)) && (d = new c(a)), (b = g(f[0])), b && (ea(f[0], b, d), (e = ga(b, d)), fa(f[0], b, d, e)), d;
            }),
            (a.fn.drawImage = function b(d) {
                function e(a, b, c, d, e) {
                    null === d.width && null === d.sWidth && (d.width = d.sWidth = s.width),
                        null === d.height && null === d.sHeight && (d.height = d.sHeight = s.height),
                        e && ((e.width = d.width), (e.height = d.height)),
                        null !== d.sWidth && null !== d.sHeight && null !== d.sx && null !== d.sy
                            ? (null === d.width && (d.width = d.sWidth),
                                null === d.height && (d.height = d.sHeight),
                                d.cropFromCenter && ((d.sx += d.sWidth / 2), (d.sy += d.sHeight / 2)),
                                d.sy - d.sHeight / 2 < 0 && (d.sy = d.sHeight / 2),
                                d.sy + d.sHeight / 2 > s.height && (d.sy = s.height - d.sHeight / 2),
                                d.sx - d.sWidth / 2 < 0 && (d.sx = d.sWidth / 2),
                                d.sx + d.sWidth / 2 > s.width && (d.sx = s.width - d.sWidth / 2),
                                q(a, b, d, d.width, d.height),
                                m(a, b, d),
                                b.drawImage(s, d.sx - d.sWidth / 2, d.sy - d.sHeight / 2, d.sWidth, d.sHeight, d.x - d.width / 2, d.y - d.height / 2, d.width, d.height))
                            : (q(a, b, d, d.width, d.height), m(a, b, d), b.drawImage(s, d.x - d.width / 2, d.y - d.height / 2, d.width, d.height)),
                        b.beginPath(),
                        b.rect(d.x - d.width / 2, d.y - d.height / 2, d.width, d.height),
                        P(a, b, d),
                        b.closePath(),
                        o(b, d),
                        n(b, c, d);
                }
                function f(b, c, d, f, g) {
                    return function () {
                        var h = a(b);
                        e(b, c, d, f, g), f.layer ? E(h, d, g, "load") : f.load && f.load.call(h[0], g), f.layer && ((g._masks = d.transforms.masks.slice(0)), f._next && h.drawLayers({ clear: !1, resetFire: !0, index: f._next }));
                    };
                }
                var h,
                    i,
                    j,
                    k,
                    l,
                    p,
                    s,
                    t,
                    u,
                    v = this,
                    w = Da.imageCache;
                for (i = 0; i < v.length; i += 1)
                    (h = v[i]),
                        (j = g(v[i])) &&
                        ((k = r(v[i])),
                            (l = new c(d)),
                            (p = F(v[i], l, d, b)),
                            l.visible &&
                            ((u = l.source),
                                (t = u.getContext),
                                u.src || t ? (s = u) : u && (w[u] && w[u].complete ? (s = w[u]) : ((s = new ja()), u.match(/^data:/i) || (s.crossOrigin = l.crossOrigin), (s.src = u), (w[u] = s))),
                                s && (s.complete || t ? f(h, j, k, l, p)() : ((s.onload = f(h, j, k, l, p)), (s.src = s.src)))));
                return v;
            }),
            (a.fn.createPattern = function (b) {
                function d() {
                    (j = e.createPattern(h, f.repeat)), f.load && f.load.call(l[0], j);
                }
                var e,
                    f,
                    h,
                    i,
                    j,
                    k,
                    l = this;
                return (
                    (e = g(l[0])),
                    e
                        ? ((f = new c(b)),
                            (k = f.source),
                            sa(k)
                                ? ((h = a("<canvas />")[0]), (h.width = f.width), (h.height = f.height), (i = g(h)), k.call(h, i), d())
                                : ((i = k.getContext), k.src || i ? (h = k) : ((h = new ja()), k.match(/^data:/i) || (h.crossOrigin = f.crossOrigin), (h.src = k)), h.complete || i ? d() : ((h.onload = d), (h.src = h.src))))
                        : (j = null),
                    j
                );
            }),
            (a.fn.createGradient = function (a) {
                var b,
                    d,
                    e,
                    f,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n = this,
                    o = [];
                if (((d = new c(a)), (b = g(n[0])))) {
                    for (
                        d.x1 = d.x1 || 0,
                        d.y1 = d.y1 || 0,
                        d.x2 = d.x2 || 0,
                        d.y2 = d.y2 || 0,
                        e = null !== d.r1 && null !== d.r2 ? b.createRadialGradient(d.x1, d.y1, d.r1, d.x2, d.y2, d.r2) : b.createLinearGradient(d.x1, d.y1, d.x2, d.y2),
                        j = 1;
                        void 0 !== d["c" + j];
                        j += 1
                    )
                        void 0 !== d["s" + j] ? o.push(d["s" + j]) : o.push(null);
                    for (f = o.length, null === o[0] && (o[0] = 0), null === o[f - 1] && (o[f - 1] = 1), j = 0; j < f; j += 1) {
                        if (null !== o[j]) {
                            for (l = 1, m = 0, h = o[j], k = j + 1; k < f; k += 1) {
                                if (null !== o[k]) {
                                    i = o[k];
                                    break;
                                }
                                l += 1;
                            }
                            h > i && (o[k] = o[j]);
                        } else null === o[j] && ((m += 1), (o[j] = h + m * ((i - h) / l)));
                        e.addColorStop(o[j], d["c" + (j + 1)]);
                    }
                } else e = null;
                return e;
            }),
            (a.fn.setPixels = function a(b) {
                var d,
                    e,
                    f,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n = this;
                for (e = 0; e < n.length; e += 1)
                    if (
                        ((d = n[e]),
                            (f = g(d)) &&
                            ((h = new c(b)),
                                F(d, h, b, a),
                                q(n[e], f, h, h.width, h.height),
                                (null !== h.width && null !== h.height) || ((h.width = d.width), (h.height = d.height), (h.x = h.width / 2), (h.y = h.height / 2)),
                                0 !== h.width && 0 !== h.height))
                    ) {
                        if (((j = f.getImageData(h.x - h.width / 2, h.y - h.height / 2, h.width, h.height)), (k = j.data), (m = k.length), h.each))
                            for (l = 0; l < m; l += 4) (i = { r: k[l], g: k[l + 1], b: k[l + 2], a: k[l + 3] }), h.each.call(d, i, h), (k[l] = i.r), (k[l + 1] = i.g), (k[l + 2] = i.b), (k[l + 3] = i.a);
                        f.putImageData(j, h.x - h.width / 2, h.y - h.height / 2), f.restore();
                    }
                return n;
            }),
            (a.fn.getCanvasImage = function (a, b) {
                var c,
                    d = this,
                    e = null;
                return 0 !== d.length && ((c = d[0]), c.toDataURL && (void 0 === b && (b = 1), (e = c.toDataURL("image/" + a, b)))), e;
            }),
            (a.fn.detectPixelRatio = function (a) {
                var c,
                    d,
                    e,
                    f,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m = this;
                for (d = 0; d < m.length; d += 1)
                    (c = m[d]),
                        (e = g(c)),
                        (l = r(m[d])),
                        l.scaled ||
                        ((f = b.devicePixelRatio || 1),
                            (h = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1),
                            (i = f / h),
                            1 !== i && ((j = c.width), (k = c.height), (c.width = j * i), (c.height = k * i), (c.style.width = j + "px"), (c.style.height = k + "px"), e.scale(i, i)),
                            (l.pixelRatio = i),
                            (l.scaled = !0),
                            a && a.call(c, i));
                return m;
            }),
            (Ha.clearCache = function () {
                var a;
                for (a in Da) Object.prototype.hasOwnProperty.call(Da, a) && (Da[a] = {});
            }),
            (a.support.canvas = void 0 !== a("<canvas />")[0].getContext),
            pa(Ha, { defaults: ha, setGlobalProps: m, transformShape: q, detectEvents: P, closePath: p, setCanvasFont: ea, measureText: fa }),
            (a.jCanvas = Ha),
            (a.jCanvasObject = c);
    });
    !(function (a) {
        var b,
            c,
            d = "0.4.2",
            e = "hasOwnProperty",
            f = /[\.\/]/,
            g = /\s*,\s*/,
            h = "*",
            i = function (a, b) {
                return a - b;
            },
            j = { n: {} },
            k = function () {
                for (var a = 0, b = this.length; b > a; a++) if ("undefined" != typeof this[a]) return this[a];
            },
            l = function () {
                for (var a = this.length; --a;) if ("undefined" != typeof this[a]) return this[a];
            },
            m = function (a, d) {
                a = String(a);
                var e,
                    f = c,
                    g = Array.prototype.slice.call(arguments, 2),
                    h = m.listeners(a),
                    j = 0,
                    n = [],
                    o = {},
                    p = [],
                    q = b;
                (p.firstDefined = k), (p.lastDefined = l), (b = a), (c = 0);
                for (var r = 0, s = h.length; s > r; r++) "zIndex" in h[r] && (n.push(h[r].zIndex), h[r].zIndex < 0 && (o[h[r].zIndex] = h[r]));
                for (n.sort(i); n[j] < 0;) if (((e = o[n[j++]]), p.push(e.apply(d, g)), c)) return (c = f), p;
                for (r = 0; s > r; r++)
                    if (((e = h[r]), "zIndex" in e))
                        if (e.zIndex == n[j]) {
                            if ((p.push(e.apply(d, g)), c)) break;
                            do if ((j++, (e = o[n[j]]), e && p.push(e.apply(d, g)), c)) break;
                            while (e);
                        } else o[e.zIndex] = e;
                    else if ((p.push(e.apply(d, g)), c)) break;
                return (c = f), (b = q), p;
            };
        (m._events = j),
            (m.listeners = function (a) {
                var b,
                    c,
                    d,
                    e,
                    g,
                    i,
                    k,
                    l,
                    m = a.split(f),
                    n = j,
                    o = [n],
                    p = [];
                for (e = 0, g = m.length; g > e; e++) {
                    for (l = [], i = 0, k = o.length; k > i; i++) for (n = o[i].n, c = [n[m[e]], n[h]], d = 2; d--;) (b = c[d]), b && (l.push(b), (p = p.concat(b.f || [])));
                    o = l;
                }
                return p;
            }),
            (m.on = function (a, b) {
                if (((a = String(a)), "function" != typeof b)) return function () { };
                for (var c = a.split(g), d = 0, e = c.length; e > d; d++)
                    !(function (a) {
                        for (var c, d = a.split(f), e = j, g = 0, h = d.length; h > g; g++) (e = e.n), (e = (e.hasOwnProperty(d[g]) && e[d[g]]) || (e[d[g]] = { n: {} }));
                        for (e.f = e.f || [], g = 0, h = e.f.length; h > g; g++)
                            if (e.f[g] == b) {
                                c = !0;
                                break;
                            }
                        !c && e.f.push(b);
                    })(c[d]);
                return function (a) {
                    +a == +a && (b.zIndex = +a);
                };
            }),
            (m.f = function (a) {
                var b = [].slice.call(arguments, 1);
                return function () {
                    m.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)));
                };
            }),
            (m.stop = function () {
                c = 1;
            }),
            (m.nt = function (a) {
                return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b;
            }),
            (m.nts = function () {
                return b.split(f);
            }),
            (m.off = m.unbind = function (a, b) {
                if (!a) return void (m._events = j = { n: {} });
                var c = a.split(g);
                if (c.length > 1) for (var d = 0, i = c.length; i > d; d++) m.off(c[d], b);
                else {
                    c = a.split(f);
                    var k,
                        l,
                        n,
                        d,
                        i,
                        o,
                        p,
                        q = [j];
                    for (d = 0, i = c.length; i > d; d++)
                        for (o = 0; o < q.length; o += n.length - 2) {
                            if (((n = [o, 1]), (k = q[o].n), c[d] != h)) k[c[d]] && n.push(k[c[d]]);
                            else for (l in k) k[e](l) && n.push(k[l]);
                            q.splice.apply(q, n);
                        }
                    for (d = 0, i = q.length; i > d; d++)
                        for (k = q[d]; k.n;) {
                            if (b) {
                                if (k.f) {
                                    for (o = 0, p = k.f.length; p > o; o++)
                                        if (k.f[o] == b) {
                                            k.f.splice(o, 1);
                                            break;
                                        }
                                    !k.f.length && delete k.f;
                                }
                                for (l in k.n)
                                    if (k.n[e](l) && k.n[l].f) {
                                        var r = k.n[l].f;
                                        for (o = 0, p = r.length; p > o; o++)
                                            if (r[o] == b) {
                                                r.splice(o, 1);
                                                break;
                                            }
                                        !r.length && delete k.n[l].f;
                                    }
                            } else {
                                delete k.f;
                                for (l in k.n) k.n[e](l) && k.n[l].f && delete k.n[l].f;
                            }
                            k = k.n;
                        }
                }
            }),
            (m.once = function (a, b) {
                var c = function () {
                    return m.unbind(a, c), b.apply(this, arguments);
                };
                return m.on(a, c);
            }),
            (m.version = d),
            (m.toString = function () {
                return "You are running Eve " + d;
            }),
            "undefined" != typeof module && module.exports
                ? (module.exports = m)
                : "function" == typeof define && define.amd
                    ? define("eve", [], function () {
                        return m;
                    })
                    : (a.eve = m);
    })(this),
        (function (a, b) {
            if ("function" == typeof define && define.amd)
                define(["eve"], function (c) {
                    return b(a, c);
                });
            else if ("undefined" != typeof exports) {
                var c = require("eve");
                module.exports = b(a, c);
            } else b(a, a.eve);
        })(window || this, function (a, b) {
            var c = (function (b) {
                var c = {},
                    d =
                        a.requestAnimationFrame ||
                        a.webkitRequestAnimationFrame ||
                        a.mozRequestAnimationFrame ||
                        a.oRequestAnimationFrame ||
                        a.msRequestAnimationFrame ||
                        function (a) {
                            setTimeout(a, 16);
                        },
                    e =
                        Array.isArray ||
                        function (a) {
                            return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a);
                        },
                    f = 0,
                    g = "M" + (+new Date()).toString(36),
                    h = function () {
                        return g + (f++).toString(36);
                    },
                    i =
                        Date.now ||
                        function () {
                            return +new Date();
                        },
                    j = function (a) {
                        var b = this;
                        if (null == a) return b.s;
                        var c = b.s - a;
                        (b.b += b.dur * c), (b.B += b.dur * c), (b.s = a);
                    },
                    k = function (a) {
                        var b = this;
                        return null == a ? b.spd : void (b.spd = a);
                    },
                    l = function (a) {
                        var b = this;
                        return null == a ? b.dur : ((b.s = (b.s * a) / b.dur), void (b.dur = a));
                    },
                    m = function () {
                        var a = this;
                        delete c[a.id], a.update(), b("mina.stop." + a.id, a);
                    },
                    n = function () {
                        var a = this;
                        a.pdif || (delete c[a.id], a.update(), (a.pdif = a.get() - a.b));
                    },
                    o = function () {
                        var a = this;
                        a.pdif && ((a.b = a.get() - a.pdif), delete a.pdif, (c[a.id] = a));
                    },
                    p = function () {
                        var a,
                            b = this;
                        if (e(b.start)) {
                            a = [];
                            for (var c = 0, d = b.start.length; d > c; c++) a[c] = +b.start[c] + (b.end[c] - b.start[c]) * b.easing(b.s);
                        } else a = +b.start + (b.end - b.start) * b.easing(b.s);
                        b.set(a);
                    },
                    q = function () {
                        var a = 0;
                        for (var e in c)
                            if (c.hasOwnProperty(e)) {
                                var f = c[e],
                                    g = f.get();
                                a++,
                                    (f.s = (g - f.b) / (f.dur / f.spd)),
                                    f.s >= 1 &&
                                    (delete c[e],
                                        (f.s = 1),
                                        a--,
                                        (function (a) {
                                            setTimeout(function () {
                                                b("mina.finish." + a.id, a);
                                            });
                                        })(f)),
                                    f.update();
                            }
                        a && d(q);
                    },
                    r = function (a, b, e, f, g, i, s) {
                        var t = { id: h(), start: a, end: b, b: e, s: 0, dur: f - e, spd: 1, get: g, set: i, easing: s || r.linear, status: j, speed: k, duration: l, stop: m, pause: n, resume: o, update: p };
                        c[t.id] = t;
                        var u,
                            v = 0;
                        for (u in c) if (c.hasOwnProperty(u) && (v++, 2 == v)) break;
                        return 1 == v && d(q), t;
                    };
                return (
                    (r.time = i),
                    (r.getById = function (a) {
                        return c[a] || null;
                    }),
                    (r.linear = function (a) {
                        return a;
                    }),
                    (r.easeout = function (a) {
                        return Math.pow(a, 1.7);
                    }),
                    (r.easein = function (a) {
                        return Math.pow(a, 0.48);
                    }),
                    (r.easeinout = function (a) {
                        if (1 == a) return 1;
                        if (0 == a) return 0;
                        var b = 0.48 - a / 1.04,
                            c = Math.sqrt(0.1734 + b * b),
                            d = c - b,
                            e = Math.pow(Math.abs(d), 1 / 3) * (0 > d ? -1 : 1),
                            f = -c - b,
                            g = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1),
                            h = e + g + 0.5;
                        return 3 * (1 - h) * h * h + h * h * h;
                    }),
                    (r.backin = function (a) {
                        if (1 == a) return 1;
                        var b = 1.70158;
                        return a * a * ((b + 1) * a - b);
                    }),
                    (r.backout = function (a) {
                        if (0 == a) return 0;
                        a -= 1;
                        var b = 1.70158;
                        return a * a * ((b + 1) * a + b) + 1;
                    }),
                    (r.elastic = function (a) {
                        return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin((2 * (a - 0.075) * Math.PI) / 0.3) + 1;
                    }),
                    (r.bounce = function (a) {
                        var b,
                            c = 7.5625,
                            d = 2.75;
                        return 1 / d > a ? (b = c * a * a) : 2 / d > a ? ((a -= 1.5 / d), (b = c * a * a + 0.75)) : 2.5 / d > a ? ((a -= 2.25 / d), (b = c * a * a + 0.9375)) : ((a -= 2.625 / d), (b = c * a * a + 0.984375)), b;
                    }),
                    (a.mina = r),
                    r
                );
            })("undefined" == typeof b ? function () { } : b),
                d = (function (a) {
                    function c(a, b) {
                        if (a) {
                            if (a.nodeType) return w(a);
                            if (e(a, "array") && c.set) return c.set.apply(c, a);
                            if (a instanceof s) return a;
                            if (null == b) return (a = y.doc.querySelector(String(a))), w(a);
                        }
                        return (a = null == a ? "100%" : a), (b = null == b ? "100%" : b), new v(a, b);
                    }
                    function d(a, b) {
                        if (b) {
                            if (("#text" == a && (a = y.doc.createTextNode(b.text || b["#text"] || "")), "#comment" == a && (a = y.doc.createComment(b.text || b["#text"] || "")), "string" == typeof a && (a = d(a)), "string" == typeof b))
                                return 1 == a.nodeType
                                    ? "xlink:" == b.substring(0, 6)
                                        ? a.getAttributeNS(T, b.substring(6))
                                        : "xml:" == b.substring(0, 4)
                                            ? a.getAttributeNS(U, b.substring(4))
                                            : a.getAttribute(b)
                                    : "text" == b
                                        ? a.nodeValue
                                        : null;
                            if (1 == a.nodeType) {
                                for (var c in b)
                                    if (b[z](c)) {
                                        var e = A(b[c]);
                                        e ? ("xlink:" == c.substring(0, 6) ? a.setAttributeNS(T, c.substring(6), e) : "xml:" == c.substring(0, 4) ? a.setAttributeNS(U, c.substring(4), e) : a.setAttribute(c, e)) : a.removeAttribute(c);
                                    }
                            } else "text" in b && (a.nodeValue = b.text);
                        } else a = y.doc.createElementNS(U, a);
                        return a;
                    }
                    function e(a, b) {
                        return (
                            (b = A.prototype.toLowerCase.call(b)),
                            "finite" == b
                                ? isFinite(a)
                                : "array" == b && (a instanceof Array || (Array.isArray && Array.isArray(a)))
                                    ? !0
                                    : ("null" == b && null === a) || (b == typeof a && null !== a) || ("object" == b && a === Object(a)) || J.call(a).slice(8, -1).toLowerCase() == b
                        );
                    }
                    function f(a) {
                        if ("function" == typeof a || Object(a) !== a) return a;
                        var b = new a.constructor();
                        for (var c in a) a[z](c) && (b[c] = f(a[c]));
                        return b;
                    }
                    function h(a, b) {
                        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return a.push(a.splice(c, 1)[0]);
                    }
                    function i(a, b, c) {
                        function d() {
                            var e = Array.prototype.slice.call(arguments, 0),
                                f = e.join("␀"),
                                g = (d.cache = d.cache || {}),
                                i = (d.count = d.count || []);
                            return g[z](f) ? (h(i, f), c ? c(g[f]) : g[f]) : (i.length >= 1e3 && delete g[i.shift()], i.push(f), (g[f] = a.apply(b, e)), c ? c(g[f]) : g[f]);
                        }
                        return d;
                    }
                    function j(a, b, c, d, e, f) {
                        if (null == e) {
                            var g = a - c,
                                h = b - d;
                            return g || h ? (180 + (180 * D.atan2(-h, -g)) / H + 360) % 360 : 0;
                        }
                        return j(a, b, e, f) - j(c, d, e, f);
                    }
                    function k(a) {
                        return ((a % 360) * H) / 180;
                    }
                    function l(a) {
                        return ((180 * a) / H) % 360;
                    }
                    function m(a) {
                        var b = [];
                        return (
                            (a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (a, c, d) {
                                return (
                                    (d = d.split(/\s*,\s*|\s+/)),
                                    "rotate" == c && 1 == d.length && d.push(0, 0),
                                    "scale" == c && (d.length > 2 ? (d = d.slice(0, 2)) : 2 == d.length && d.push(0, 0), 1 == d.length && d.push(d[0], 0, 0)),
                                    b.push("skewX" == c ? ["m", 1, 0, D.tan(k(d[0])), 1, 0, 0] : "skewY" == c ? ["m", 1, D.tan(k(d[0])), 0, 1, 0, 0] : [c.charAt(0)].concat(d)),
                                    a
                                );
                            })),
                            b
                        );
                    }
                    function n(a, b) {
                        var d = ab(a),
                            e = new c.Matrix();
                        if (d)
                            for (var f = 0, g = d.length; g > f; f++) {
                                var h,
                                    i,
                                    j,
                                    k,
                                    l,
                                    m = d[f],
                                    n = m.length,
                                    o = A(m[0]).toLowerCase(),
                                    p = m[0] != o,
                                    q = p ? e.invert() : 0;
                                "t" == o && 2 == n
                                    ? e.translate(m[1], 0)
                                    : "t" == o && 3 == n
                                        ? p
                                            ? ((h = q.x(0, 0)), (i = q.y(0, 0)), (j = q.x(m[1], m[2])), (k = q.y(m[1], m[2])), e.translate(j - h, k - i))
                                            : e.translate(m[1], m[2])
                                        : "r" == o
                                            ? 2 == n
                                                ? ((l = l || b), e.rotate(m[1], l.x + l.width / 2, l.y + l.height / 2))
                                                : 4 == n && (p ? ((j = q.x(m[2], m[3])), (k = q.y(m[2], m[3])), e.rotate(m[1], j, k)) : e.rotate(m[1], m[2], m[3]))
                                            : "s" == o
                                                ? 2 == n || 3 == n
                                                    ? ((l = l || b), e.scale(m[1], m[n - 1], l.x + l.width / 2, l.y + l.height / 2))
                                                    : 4 == n
                                                        ? p
                                                            ? ((j = q.x(m[2], m[3])), (k = q.y(m[2], m[3])), e.scale(m[1], m[1], j, k))
                                                            : e.scale(m[1], m[1], m[2], m[3])
                                                        : 5 == n && (p ? ((j = q.x(m[3], m[4])), (k = q.y(m[3], m[4])), e.scale(m[1], m[2], j, k)) : e.scale(m[1], m[2], m[3], m[4]))
                                                : "m" == o && 7 == n && e.add(m[1], m[2], m[3], m[4], m[5], m[6]);
                            }
                        return e;
                    }
                    function o(a) {
                        var b = (a.node.ownerSVGElement && w(a.node.ownerSVGElement)) || (a.node.parentNode && w(a.node.parentNode)) || c.select("svg") || c(0, 0),
                            d = b.select("defs"),
                            e = null == d ? !1 : d.node;
                        return e || (e = u("defs", b.node).node), e;
                    }
                    function p(a) {
                        return (a.node.ownerSVGElement && w(a.node.ownerSVGElement)) || c.select("svg");
                    }
                    function q(a, b, c) {
                        function e(a) {
                            if (null == a) return I;
                            if (a == +a) return a;
                            d(j, { width: a });
                            try {
                                return j.getBBox().width;
                            } catch (b) {
                                return 0;
                            }
                        }
                        function f(a) {
                            if (null == a) return I;
                            if (a == +a) return a;
                            d(j, { height: a });
                            try {
                                return j.getBBox().height;
                            } catch (b) {
                                return 0;
                            }
                        }
                        function g(d, e) {
                            null == b ? (i[d] = e(a.attr(d) || 0)) : d == b && (i = e(null == c ? a.attr(d) || 0 : c));
                        }
                        var h = p(a).node,
                            i = {},
                            j = h.querySelector(".svg---mgr");
                        switch ((j || ((j = d("rect")), d(j, { x: -9e9, y: -9e9, width: 10, height: 10, class: "svg---mgr", fill: "none" }), h.appendChild(j)), a.type)) {
                            case "rect":
                                g("rx", e), g("ry", f);
                            case "image":
                                g("width", e), g("height", f);
                            case "text":
                                g("x", e), g("y", f);
                                break;
                            case "circle":
                                g("cx", e), g("cy", f), g("r", e);
                                break;
                            case "ellipse":
                                g("cx", e), g("cy", f), g("rx", e), g("ry", f);
                                break;
                            case "line":
                                g("x1", e), g("x2", e), g("y1", f), g("y2", f);
                                break;
                            case "marker":
                                g("refX", e), g("markerWidth", e), g("refY", f), g("markerHeight", f);
                                break;
                            case "radialGradient":
                                g("fx", e), g("fy", f);
                                break;
                            case "tspan":
                                g("dx", e), g("dy", f);
                                break;
                            default:
                                g(b, e);
                        }
                        return h.removeChild(j), i;
                    }
                    function r(a) {
                        e(a, "array") || (a = Array.prototype.slice.call(arguments, 0));
                        for (var b = 0, c = 0, d = this.node; this[b];) delete this[b++];
                        for (b = 0; b < a.length; b++)
                            "set" == a[b].type
                                ? a[b].forEach(function (a) {
                                    d.appendChild(a.node);
                                })
                                : d.appendChild(a[b].node);
                        var f = d.childNodes;
                        for (b = 0; b < f.length; b++) this[c++] = w(f[b]);
                        return this;
                    }
                    function s(a) {
                        if (a.snap in V) return V[a.snap];
                        var b;
                        try {
                            b = a.ownerSVGElement;
                        } catch (c) { }
                        (this.node = a), b && (this.paper = new v(b)), (this.type = a.tagName || a.nodeName);
                        var d = (this.id = S(this));
                        if (((this.anims = {}), (this._ = { transform: [] }), (a.snap = d), (V[d] = this), "g" == this.type && (this.add = r), this.type in { g: 1, mask: 1, pattern: 1, symbol: 1 }))
                            for (var e in v.prototype) v.prototype[z](e) && (this[e] = v.prototype[e]);
                    }
                    function t(a) {
                        this.node = a;
                    }
                    function u(a, b) {
                        var c = d(a);
                        b.appendChild(c);
                        var e = w(c);
                        return e;
                    }
                    function v(a, b) {
                        var c,
                            e,
                            f,
                            g = v.prototype;
                        if (a && "svg" == a.tagName) {
                            if (a.snap in V) return V[a.snap];
                            var h = a.ownerDocument;
                            (c = new s(a)),
                                (e = a.getElementsByTagName("desc")[0]),
                                (f = a.getElementsByTagName("defs")[0]),
                                e || ((e = d("desc")), e.appendChild(h.createTextNode("Created with Snap")), c.node.appendChild(e)),
                                f || ((f = d("defs")), c.node.appendChild(f)),
                                (c.defs = f);
                            for (var i in g) g[z](i) && (c[i] = g[i]);
                            c.paper = c.root = c;
                        } else (c = u("svg", y.doc.body)), d(c.node, { height: b, version: 1.1, width: a, xmlns: U });
                        return c;
                    }
                    function w(a) {
                        return a
                            ? a instanceof s || a instanceof t
                                ? a
                                : a.tagName && "svg" == a.tagName.toLowerCase()
                                    ? new v(a)
                                    : a.tagName && "object" == a.tagName.toLowerCase() && "image/svg+xml" == a.type
                                        ? new v(a.contentDocument.getElementsByTagName("svg")[0])
                                        : new s(a)
                            : a;
                    }
                    function x(a, b) {
                        for (var c = 0, d = a.length; d > c; c++) {
                            var e = { type: a[c].type, attr: a[c].attr() },
                                f = a[c].children();
                            b.push(e), f.length && x(f, (e.childNodes = []));
                        }
                    }
                    (c.version = "0.4.0"),
                        (c.toString = function () {
                            return "Snap v" + this.version;
                        }),
                        (c._ = {});
                    var y = { win: a.window, doc: a.window.document };
                    c._.glob = y;
                    {
                        var z = "hasOwnProperty",
                            A = String,
                            B = parseFloat,
                            C = parseInt,
                            D = Math,
                            E = D.max,
                            F = D.min,
                            G = D.abs,
                            H = (D.pow, D.PI),
                            I = (D.round, ""),
                            J = Object.prototype.toString,
                            K = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                            L = ((c._.separator = /[,\s]+/), /[\s]*,[\s]*/),
                            M = { hs: 1, rg: 1 },
                            N = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                            O = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                            P = /(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/gi,
                            Q = 0,
                            R = "S" + (+new Date()).toString(36),
                            S = function (a) {
                                return (a && a.type ? a.type : I) + R + (Q++).toString(36);
                            },
                            T = "http://www.w3.org/1999/xlink",
                            U = "http://www.w3.org/2000/svg",
                            V = {};
                        c.url = function (a) {
                            return "url('#" + a + "')";
                        };
                    }
                    (c._.$ = d),
                        (c._.id = S),
                        (c.format = (function () {
                            var a = /\{([^\}]+)\}/g,
                                b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                                c = function (a, c, d) {
                                    var e = d;
                                    return (
                                        c.replace(b, function (a, b, c, d, f) {
                                            (b = b || d), e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()));
                                        }),
                                        (e = (null == e || e == d ? a : e) + "")
                                    );
                                };
                            return function (b, d) {
                                return A(b).replace(a, function (a, b) {
                                    return c(a, b, d);
                                });
                            };
                        })()),
                        (c._.clone = f),
                        (c._.cacher = i),
                        (c.rad = k),
                        (c.deg = l),
                        (c.sin = function (a) {
                            return D.sin(c.rad(a));
                        }),
                        (c.tan = function (a) {
                            return D.tan(c.rad(a));
                        }),
                        (c.cos = function (a) {
                            return D.cos(c.rad(a));
                        }),
                        (c.asin = function (a) {
                            return c.deg(D.asin(a));
                        }),
                        (c.acos = function (a) {
                            return c.deg(D.acos(a));
                        }),
                        (c.atan = function (a) {
                            return c.deg(D.atan(a));
                        }),
                        (c.atan2 = function (a) {
                            return c.deg(D.atan2(a));
                        }),
                        (c.angle = j),
                        (c.len = function (a, b, d, e) {
                            return Math.sqrt(c.len2(a, b, d, e));
                        }),
                        (c.len2 = function (a, b, c, d) {
                            return (a - c) * (a - c) + (b - d) * (b - d);
                        }),
                        (c.closestPoint = function (a, b, c) {
                            function d(a) {
                                var d = a.x - b,
                                    e = a.y - c;
                                return d * d + e * e;
                            }
                            for (var e, f, g, h, i = a.node, j = i.getTotalLength(), k = (j / i.pathSegList.numberOfItems) * 0.125, l = 1 / 0, m = 0; j >= m; m += k) (h = d((g = i.getPointAtLength(m)))) < l && ((e = g), (f = m), (l = h));
                            for (k *= 0.5; k > 0.5;) {
                                var n, o, p, q, r, s;
                                (p = f - k) >= 0 && (r = d((n = i.getPointAtLength(p)))) < l ? ((e = n), (f = p), (l = r)) : (q = f + k) <= j && (s = d((o = i.getPointAtLength(q)))) < l ? ((e = o), (f = q), (l = s)) : (k *= 0.5);
                            }
                            return (e = { x: e.x, y: e.y, length: f, distance: Math.sqrt(l) });
                        }),
                        (c.is = e),
                        (c.snapTo = function (a, b, c) {
                            if (((c = e(c, "finite") ? c : 10), e(a, "array"))) {
                                for (var d = a.length; d--;) if (G(a[d] - b) <= c) return a[d];
                            } else {
                                a = +a;
                                var f = b % a;
                                if (c > f) return b - f;
                                if (f > a - c) return b - f + a;
                            }
                            return b;
                        }),
                        (c.getRGB = i(function (a) {
                            if (!a || (a = A(a)).indexOf("-") + 1) return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: Z };
                            if ("none" == a) return { r: -1, g: -1, b: -1, hex: "none", toString: Z };
                            if ((!(M[z](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = W(a)), !a)) return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: Z };
                            var b,
                                d,
                                f,
                                g,
                                h,
                                i,
                                j = a.match(K);
                            return j
                                ? (j[2] && ((f = C(j[2].substring(5), 16)), (d = C(j[2].substring(3, 5), 16)), (b = C(j[2].substring(1, 3), 16))),
                                    j[3] && ((f = C((h = j[3].charAt(3)) + h, 16)), (d = C((h = j[3].charAt(2)) + h, 16)), (b = C((h = j[3].charAt(1)) + h, 16))),
                                    j[4] &&
                                    ((i = j[4].split(L)),
                                        (b = B(i[0])),
                                        "%" == i[0].slice(-1) && (b *= 2.55),
                                        (d = B(i[1])),
                                        "%" == i[1].slice(-1) && (d *= 2.55),
                                        (f = B(i[2])),
                                        "%" == i[2].slice(-1) && (f *= 2.55),
                                        "rgba" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])),
                                        i[3] && "%" == i[3].slice(-1) && (g /= 100)),
                                    j[5]
                                        ? ((i = j[5].split(L)),
                                            (b = B(i[0])),
                                            "%" == i[0].slice(-1) && (b /= 100),
                                            (d = B(i[1])),
                                            "%" == i[1].slice(-1) && (d /= 100),
                                            (f = B(i[2])),
                                            "%" == i[2].slice(-1) && (f /= 100),
                                            ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360),
                                            "hsba" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])),
                                            i[3] && "%" == i[3].slice(-1) && (g /= 100),
                                            c.hsb2rgb(b, d, f, g))
                                        : j[6]
                                            ? ((i = j[6].split(L)),
                                                (b = B(i[0])),
                                                "%" == i[0].slice(-1) && (b /= 100),
                                                (d = B(i[1])),
                                                "%" == i[1].slice(-1) && (d /= 100),
                                                (f = B(i[2])),
                                                "%" == i[2].slice(-1) && (f /= 100),
                                                ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360),
                                                "hsla" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])),
                                                i[3] && "%" == i[3].slice(-1) && (g /= 100),
                                                c.hsl2rgb(b, d, f, g))
                                            : ((b = F(D.round(b), 255)),
                                                (d = F(D.round(d), 255)),
                                                (f = F(D.round(f), 255)),
                                                (g = F(E(g, 0), 1)),
                                                (j = { r: b, g: d, b: f, toString: Z }),
                                                (j.hex = "#" + (16777216 | f | (d << 8) | (b << 16)).toString(16).slice(1)),
                                                (j.opacity = e(g, "finite") ? g : 1),
                                                j))
                                : { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: Z };
                        }, c)),
                        (c.hsb = i(function (a, b, d) {
                            return c.hsb2rgb(a, b, d).hex;
                        })),
                        (c.hsl = i(function (a, b, d) {
                            return c.hsl2rgb(a, b, d).hex;
                        })),
                        (c.rgb = i(function (a, b, c, d) {
                            if (e(d, "finite")) {
                                var f = D.round;
                                return "rgba(" + [f(a), f(b), f(c), +d.toFixed(2)] + ")";
                            }
                            return "#" + (16777216 | c | (b << 8) | (a << 16)).toString(16).slice(1);
                        }));
                    var W = function (a) {
                        var b = y.doc.getElementsByTagName("head")[0] || y.doc.getElementsByTagName("svg")[0],
                            c = "rgb(255, 0, 0)";
                        return (W = i(function (a) {
                            if ("red" == a.toLowerCase()) return c;
                            (b.style.color = c), (b.style.color = a);
                            var d = y.doc.defaultView.getComputedStyle(b, I).getPropertyValue("color");
                            return d == c ? null : d;
                        }))(a);
                    },
                        X = function () {
                            return "hsb(" + [this.h, this.s, this.b] + ")";
                        },
                        Y = function () {
                            return "hsl(" + [this.h, this.s, this.l] + ")";
                        },
                        Z = function () {
                            return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
                        },
                        $ = function (a, b, d) {
                            if ((null == b && e(a, "object") && "r" in a && "g" in a && "b" in a && ((d = a.b), (b = a.g), (a = a.r)), null == b && e(a, string))) {
                                var f = c.getRGB(a);
                                (a = f.r), (b = f.g), (d = f.b);
                            }
                            return (a > 1 || b > 1 || d > 1) && ((a /= 255), (b /= 255), (d /= 255)), [a, b, d];
                        },
                        _ = function (a, b, d, f) {
                            (a = D.round(255 * a)), (b = D.round(255 * b)), (d = D.round(255 * d));
                            var g = { r: a, g: b, b: d, opacity: e(f, "finite") ? f : 1, hex: c.rgb(a, b, d), toString: Z };
                            return e(f, "finite") && (g.opacity = f), g;
                        };
                    (c.color = function (a) {
                        var b;
                        return (
                            e(a, "object") && "h" in a && "s" in a && "b" in a
                                ? ((b = c.hsb2rgb(a)), (a.r = b.r), (a.g = b.g), (a.b = b.b), (a.opacity = 1), (a.hex = b.hex))
                                : e(a, "object") && "h" in a && "s" in a && "l" in a
                                    ? ((b = c.hsl2rgb(a)), (a.r = b.r), (a.g = b.g), (a.b = b.b), (a.opacity = 1), (a.hex = b.hex))
                                    : (e(a, "string") && (a = c.getRGB(a)),
                                        e(a, "object") && "r" in a && "g" in a && "b" in a && !("error" in a)
                                            ? ((b = c.rgb2hsl(a)), (a.h = b.h), (a.s = b.s), (a.l = b.l), (b = c.rgb2hsb(a)), (a.v = b.b))
                                            : ((a = { hex: "none" }), (a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1), (a.error = 1))),
                            (a.toString = Z),
                            a
                        );
                    }),
                        (c.hsb2rgb = function (a, b, c, d) {
                            e(a, "object") && "h" in a && "s" in a && "b" in a && ((c = a.b), (b = a.s), (d = a.o), (a = a.h)), (a *= 360);
                            var f, g, h, i, j;
                            return (a = (a % 360) / 60), (j = c * b), (i = j * (1 - G((a % 2) - 1))), (f = g = h = c - j), (a = ~~a), (f += [j, i, 0, 0, i, j][a]), (g += [i, j, j, i, 0, 0][a]), (h += [0, 0, i, j, j, i][a]), _(f, g, h, d);
                        }),
                        (c.hsl2rgb = function (a, b, c, d) {
                            e(a, "object") && "h" in a && "s" in a && "l" in a && ((c = a.l), (b = a.s), (a = a.h)), (a > 1 || b > 1 || c > 1) && ((a /= 360), (b /= 100), (c /= 100)), (a *= 360);
                            var f, g, h, i, j;
                            return (
                                (a = (a % 360) / 60),
                                (j = 2 * b * (0.5 > c ? c : 1 - c)),
                                (i = j * (1 - G((a % 2) - 1))),
                                (f = g = h = c - j / 2),
                                (a = ~~a),
                                (f += [j, i, 0, 0, i, j][a]),
                                (g += [i, j, j, i, 0, 0][a]),
                                (h += [0, 0, i, j, j, i][a]),
                                _(f, g, h, d)
                            );
                        }),
                        (c.rgb2hsb = function (a, b, c) {
                            (c = $(a, b, c)), (a = c[0]), (b = c[1]), (c = c[2]);
                            var d, e, f, g;
                            return (
                                (f = E(a, b, c)),
                                (g = f - F(a, b, c)),
                                (d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4),
                                (d = (((d + 360) % 6) * 60) / 360),
                                (e = 0 == g ? 0 : g / f),
                                { h: d, s: e, b: f, toString: X }
                            );
                        }),
                        (c.rgb2hsl = function (a, b, c) {
                            (c = $(a, b, c)), (a = c[0]), (b = c[1]), (c = c[2]);
                            var d, e, f, g, h, i;
                            return (
                                (g = E(a, b, c)),
                                (h = F(a, b, c)),
                                (i = g - h),
                                (d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4),
                                (d = (((d + 360) % 6) * 60) / 360),
                                (f = (g + h) / 2),
                                (e = 0 == i ? 0 : 0.5 > f ? i / (2 * f) : i / (2 - 2 * f)),
                                { h: d, s: e, l: f, toString: Y }
                            );
                        }),
                        (c.parsePathString = function (a) {
                            if (!a) return null;
                            var b = c.path(a);
                            if (b.arr) return c.path.clone(b.arr);
                            var d = { a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0 },
                                f = [];
                            return (
                                e(a, "array") && e(a[0], "array") && (f = c.path.clone(a)),
                                f.length ||
                                A(a).replace(N, function (a, b, c) {
                                    var e = [],
                                        g = b.toLowerCase();
                                    if (
                                        (c.replace(P, function (a, b) {
                                            b && e.push(+b);
                                        }),
                                            "m" == g && e.length > 2 && (f.push([b].concat(e.splice(0, 2))), (g = "l"), (b = "m" == b ? "l" : "L")),
                                            "o" == g && 1 == e.length && f.push([b, e[0]]),
                                            "r" == g)
                                    )
                                        f.push([b].concat(e));
                                    else for (; e.length >= d[g] && (f.push([b].concat(e.splice(0, d[g]))), d[g]););
                                }),
                                (f.toString = c.path.toString),
                                (b.arr = c.path.clone(f)),
                                f
                            );
                        });
                    var ab = (c.parseTransformString = function (a) {
                        if (!a) return null;
                        var b = [];
                        return (
                            e(a, "array") && e(a[0], "array") && (b = c.path.clone(a)),
                            b.length ||
                            A(a).replace(O, function (a, c, d) {
                                {
                                    var e = [];
                                    c.toLowerCase();
                                }
                                d.replace(P, function (a, b) {
                                    b && e.push(+b);
                                }),
                                    b.push([c].concat(e));
                            }),
                            (b.toString = c.path.toString),
                            b
                        );
                    });
                    (c._.svgTransform2string = m), (c._.rgTransform = /^[a-z][\s]*-?\.?\d/i), (c._.transform2matrix = n), (c._unit2px = q);
                    y.doc.contains || y.doc.compareDocumentPosition
                        ? function (a, b) {
                            var c = 9 == a.nodeType ? a.documentElement : a,
                                d = b && b.parentNode;
                            return a == d || !(!d || 1 != d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
                        }
                        : function (a, b) {
                            if (b) for (; b;) if (((b = b.parentNode), b == a)) return !0;
                            return !1;
                        };
                    (c._.getSomeDefs = o),
                        (c._.getSomeSVG = p),
                        (c.select = function (a) {
                            return (a = A(a).replace(/([^\\]):/g, "$1\\:")), w(y.doc.querySelector(a));
                        }),
                        (c.selectAll = function (a) {
                            for (var b = y.doc.querySelectorAll(a), d = (c.set || Array)(), e = 0; e < b.length; e++) d.push(w(b[e]));
                            return d;
                        }),
                        setInterval(function () {
                            for (var a in V)
                                if (V[z](a)) {
                                    var b = V[a],
                                        c = b.node;
                                    (("svg" != b.type && !c.ownerSVGElement) || ("svg" == b.type && (!c.parentNode || ("ownerSVGElement" in c.parentNode && !c.ownerSVGElement)))) && delete V[a];
                                }
                        }, 1e4),
                        (s.prototype.attr = function (a, c) {
                            var d = this,
                                f = d.node;
                            if (!a) {
                                if (1 != f.nodeType) return { text: f.nodeValue };
                                for (var g = f.attributes, h = {}, i = 0, j = g.length; j > i; i++) h[g[i].nodeName] = g[i].nodeValue;
                                return h;
                            }
                            if (e(a, "string")) {
                                if (!(arguments.length > 1)) return b("snap.util.getattr." + a, d).firstDefined();
                                var k = {};
                                (k[a] = c), (a = k);
                            }
                            for (var l in a) a[z](l) && b("snap.util.attr." + l, d, a[l]);
                            return d;
                        }),
                        (c.parse = function (a) {
                            var b = y.doc.createDocumentFragment(),
                                c = !0,
                                d = y.doc.createElement("div");
                            if (((a = A(a)), a.match(/^\s*<\s*svg(?:\s|>)/) || ((a = "<svg>" + a + "</svg>"), (c = !1)), (d.innerHTML = a), (a = d.getElementsByTagName("svg")[0])))
                                if (c) b = a;
                                else for (; a.firstChild;) b.appendChild(a.firstChild);
                            return new t(b);
                        }),
                        (c.fragment = function () {
                            for (var a = Array.prototype.slice.call(arguments, 0), b = y.doc.createDocumentFragment(), d = 0, e = a.length; e > d; d++) {
                                var f = a[d];
                                f.node && f.node.nodeType && b.appendChild(f.node), f.nodeType && b.appendChild(f), "string" == typeof f && b.appendChild(c.parse(f).node);
                            }
                            return new t(b);
                        }),
                        (c._.make = u),
                        (c._.wrap = w),
                        (v.prototype.el = function (a, b) {
                            var c = u(a, this.node);
                            return b && c.attr(b), c;
                        }),
                        (s.prototype.children = function () {
                            for (var a = [], b = this.node.childNodes, d = 0, e = b.length; e > d; d++) a[d] = c(b[d]);
                            return a;
                        }),
                        (s.prototype.toJSON = function () {
                            var a = [];
                            return x([this], a), a[0];
                        }),
                        b.on("snap.util.getattr", function () {
                            var a = b.nt();
                            a = a.substring(a.lastIndexOf(".") + 1);
                            var c = a.replace(/[A-Z]/g, function (a) {
                                return "-" + a.toLowerCase();
                            });
                            return bb[z](c) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(c) : d(this.node, a);
                        });
                    var bb = {
                        "alignment-baseline": 0,
                        "baseline-shift": 0,
                        clip: 0,
                        "clip-path": 0,
                        "clip-rule": 0,
                        color: 0,
                        "color-interpolation": 0,
                        "color-interpolation-filters": 0,
                        "color-profile": 0,
                        "color-rendering": 0,
                        cursor: 0,
                        direction: 0,
                        display: 0,
                        "dominant-baseline": 0,
                        "enable-background": 0,
                        fill: 0,
                        "fill-opacity": 0,
                        "fill-rule": 0,
                        filter: 0,
                        "flood-color": 0,
                        "flood-opacity": 0,
                        font: 0,
                        "font-family": 0,
                        "font-size": 0,
                        "font-size-adjust": 0,
                        "font-stretch": 0,
                        "font-style": 0,
                        "font-variant": 0,
                        "font-weight": 0,
                        "glyph-orientation-horizontal": 0,
                        "glyph-orientation-vertical": 0,
                        "image-rendering": 0,
                        kerning: 0,
                        "letter-spacing": 0,
                        "lighting-color": 0,
                        marker: 0,
                        "marker-end": 0,
                        "marker-mid": 0,
                        "marker-start": 0,
                        mask: 0,
                        opacity: 0,
                        overflow: 0,
                        "pointer-events": 0,
                        "shape-rendering": 0,
                        "stop-color": 0,
                        "stop-opacity": 0,
                        stroke: 0,
                        "stroke-dasharray": 0,
                        "stroke-dashoffset": 0,
                        "stroke-linecap": 0,
                        "stroke-linejoin": 0,
                        "stroke-miterlimit": 0,
                        "stroke-opacity": 0,
                        "stroke-width": 0,
                        "text-anchor": 0,
                        "text-decoration": 0,
                        "text-rendering": 0,
                        "unicode-bidi": 0,
                        visibility: 0,
                        "word-spacing": 0,
                        "writing-mode": 0,
                    };
                    b.on("snap.util.attr", function (a) {
                        var c = b.nt(),
                            e = {};
                        (c = c.substring(c.lastIndexOf(".") + 1)), (e[c] = a);
                        var f = c.replace(/-(\w)/gi, function (a, b) {
                            return b.toUpperCase();
                        }),
                            g = c.replace(/[A-Z]/g, function (a) {
                                return "-" + a.toLowerCase();
                            });
                        bb[z](g) ? (this.node.style[f] = null == a ? I : a) : d(this.node, e);
                    }),
                        (function () { })(v.prototype),
                        (c.ajax = function (a, c, d, f) {
                            var g = new XMLHttpRequest(),
                                h = S();
                            if (g) {
                                if (e(c, "function")) (f = d), (d = c), (c = null);
                                else if (e(c, "object")) {
                                    var i = [];
                                    for (var j in c) c.hasOwnProperty(j) && i.push(encodeURIComponent(j) + "=" + encodeURIComponent(c[j]));
                                    c = i.join("&");
                                }
                                return (
                                    g.open(c ? "POST" : "GET", a, !0),
                                    c && (g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), g.setRequestHeader("Content-type", "application/x-www-form-urlencoded")),
                                    d && (b.once("snap.ajax." + h + ".0", d), b.once("snap.ajax." + h + ".200", d), b.once("snap.ajax." + h + ".304", d)),
                                    (g.onreadystatechange = function () {
                                        4 == g.readyState && b("snap.ajax." + h + "." + g.status, f, g);
                                    }),
                                    4 == g.readyState ? g : (g.send(c), g)
                                );
                            }
                        }),
                        (c.load = function (a, b, d) {
                            c.ajax(a, function (a) {
                                var e = c.parse(a.responseText);
                                d ? b.call(d, e) : b(e);
                            });
                        });
                    var cb = function (a) {
                        var b = a.getBoundingClientRect(),
                            c = a.ownerDocument,
                            d = c.body,
                            e = c.documentElement,
                            f = e.clientTop || d.clientTop || 0,
                            h = e.clientLeft || d.clientLeft || 0,
                            i = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
                            j = b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - h;
                        return { y: i, x: j };
                    };
                    return (
                        (c.getElementByPoint = function (a, b) {
                            var c = this,
                                d = (c.canvas, y.doc.elementFromPoint(a, b));
                            if (y.win.opera && "svg" == d.tagName) {
                                var e = cb(d),
                                    f = d.createSVGRect();
                                (f.x = a - e.x), (f.y = b - e.y), (f.width = f.height = 1);
                                var g = d.getIntersectionList(f, null);
                                g.length && (d = g[g.length - 1]);
                            }
                            return d ? w(d) : null;
                        }),
                        (c.plugin = function (a) {
                            a(c, s, v, y, t);
                        }),
                        (y.win.Snap = c),
                        c
                    );
                })(a || this);
            return (
                d.plugin(function (d, e, f, g, h) {
                    function i(a, b) {
                        if (null == b) {
                            var c = !0;
                            if (((b = a.node.getAttribute("linearGradient" == a.type || "radialGradient" == a.type ? "gradientTransform" : "pattern" == a.type ? "patternTransform" : "transform")), !b)) return new d.Matrix();
                            b = d._.svgTransform2string(b);
                        } else (b = d._.rgTransform.test(b) ? o(b).replace(/\.{3}|\u2026/g, a._.transform || "") : d._.svgTransform2string(b)), n(b, "array") && (b = d.path ? d.path.toString.call(b) : o(b)), (a._.transform = b);
                        var e = d._.transform2matrix(b, a.getBBox(1));
                        return c ? e : void (a.matrix = e);
                    }
                    function j(a) {
                        function b(a, b) {
                            var c = q(a.node, b);
                            (c = c && c.match(f)),
                                (c = c && c[2]),
                                c &&
                                "#" == c.charAt() &&
                                ((c = c.substring(1)),
                                    c &&
                                    (h[c] = (h[c] || []).concat(function (c) {
                                        var d = {};
                                        (d[b] = URL(c)), q(a.node, d);
                                    })));
                        }
                        function c(a) {
                            var b = q(a.node, "xlink:href");
                            b &&
                                "#" == b.charAt() &&
                                ((b = b.substring(1)),
                                    b &&
                                    (h[b] = (h[b] || []).concat(function (b) {
                                        a.attr("xlink:href", "#" + b);
                                    })));
                        }
                        for (var d, e = a.selectAll("*"), f = /^\s*url\(("|'|)(.*)\1\)\s*$/, g = [], h = {}, i = 0, j = e.length; j > i; i++) {
                            (d = e[i]), b(d, "fill"), b(d, "stroke"), b(d, "filter"), b(d, "mask"), b(d, "clip-path"), c(d);
                            var k = q(d.node, "id");
                            k && (q(d.node, { id: d.id }), g.push({ old: k, id: d.id }));
                        }
                        for (i = 0, j = g.length; j > i; i++) {
                            var l = h[g[i].old];
                            if (l) for (var m = 0, n = l.length; n > m; m++) l[m](g[i].id);
                        }
                    }
                    function k(a, b, c) {
                        return function (d) {
                            var e = d.slice(a, b);
                            return 1 == e.length && (e = e[0]), c ? c(e) : e;
                        };
                    }
                    function l(a) {
                        return function () {
                            var b = a ? "<" + this.type : "",
                                c = this.node.attributes,
                                d = this.node.childNodes;
                            if (a) for (var e = 0, f = c.length; f > e; e++) b += " " + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"';
                            if (d.length) {
                                for (a && (b += ">"), e = 0, f = d.length; f > e; e++) 3 == d[e].nodeType ? (b += d[e].nodeValue) : 1 == d[e].nodeType && (b += u(d[e]).toString());
                                a && (b += "</" + this.type + ">");
                            } else a && (b += "/>");
                            return b;
                        };
                    }
                    var m = e.prototype,
                        n = d.is,
                        o = String,
                        p = d._unit2px,
                        q = d._.$,
                        r = d._.make,
                        s = d._.getSomeDefs,
                        t = "hasOwnProperty",
                        u = d._.wrap;
                    m.getBBox = function (a) {
                        if (!d.Matrix || !d.path) return this.node.getBBox();
                        var b = this,
                            c = new d.Matrix();
                        if (b.removed) return d._.box();
                        for (; "use" == b.type;)
                            if ((a || (c = c.add(b.transform().localMatrix.translate(b.attr("x") || 0, b.attr("y") || 0))), b.original)) b = b.original;
                            else {
                                var e = b.attr("xlink:href");
                                b = b.original = b.node.ownerDocument.getElementById(e.substring(e.indexOf("#") + 1));
                            }
                        var f = b._,
                            g = d.path.get[b.type] || d.path.get.deflt;
                        try {
                            return a
                                ? ((f.bboxwt = g ? d.path.getBBox((b.realPath = g(b))) : d._.box(b.node.getBBox())), d._.box(f.bboxwt))
                                : ((b.realPath = g(b)), (b.matrix = b.transform().localMatrix), (f.bbox = d.path.getBBox(d.path.map(b.realPath, c.add(b.matrix)))), d._.box(f.bbox));
                        } catch (h) {
                            return d._.box();
                        }
                    };
                    var v = function () {
                        return this.string;
                    };
                    (m.transform = function (a) {
                        var b = this._;
                        if (null == a) {
                            for (
                                var c, e = this, f = new d.Matrix(this.node.getCTM()), g = i(this), h = [g], j = new d.Matrix(), k = g.toTransformString(), l = o(g) == o(this.matrix) ? o(b.transform) : k;
                                "svg" != e.type && (e = e.parent());

                            )
                                h.push(i(e));
                            for (c = h.length; c--;) j.add(h[c]);
                            return { string: l, globalMatrix: f, totalMatrix: j, localMatrix: g, diffMatrix: f.clone().add(g.invert()), global: f.toTransformString(), total: j.toTransformString(), local: k, toString: v };
                        }
                        return (
                            a instanceof d.Matrix ? ((this.matrix = a), (this._.transform = a.toTransformString())) : i(this, a),
                            this.node &&
                            ("linearGradient" == this.type || "radialGradient" == this.type
                                ? q(this.node, { gradientTransform: this.matrix })
                                : "pattern" == this.type
                                    ? q(this.node, { patternTransform: this.matrix })
                                    : q(this.node, { transform: this.matrix })),
                            this
                        );
                    }),
                        (m.parent = function () {
                            return u(this.node.parentNode);
                        }),
                        (m.append = m.add = function (a) {
                            if (a) {
                                if ("set" == a.type) {
                                    var b = this;
                                    return (
                                        a.forEach(function (a) {
                                            b.add(a);
                                        }),
                                        this
                                    );
                                }
                                (a = u(a)), this.node.appendChild(a.node), (a.paper = this.paper);
                            }
                            return this;
                        }),
                        (m.appendTo = function (a) {
                            return a && ((a = u(a)), a.append(this)), this;
                        }),
                        (m.prepend = function (a) {
                            if (a) {
                                if ("set" == a.type) {
                                    var b,
                                        c = this;
                                    return (
                                        a.forEach(function (a) {
                                            b ? b.after(a) : c.prepend(a), (b = a);
                                        }),
                                        this
                                    );
                                }
                                a = u(a);
                                var d = a.parent();
                                this.node.insertBefore(a.node, this.node.firstChild), this.add && this.add(), (a.paper = this.paper), this.parent() && this.parent().add(), d && d.add();
                            }
                            return this;
                        }),
                        (m.prependTo = function (a) {
                            return (a = u(a)), a.prepend(this), this;
                        }),
                        (m.before = function (a) {
                            if ("set" == a.type) {
                                var b = this;
                                return (
                                    a.forEach(function (a) {
                                        var c = a.parent();
                                        b.node.parentNode.insertBefore(a.node, b.node), c && c.add();
                                    }),
                                    this.parent().add(),
                                    this
                                );
                            }
                            a = u(a);
                            var c = a.parent();
                            return this.node.parentNode.insertBefore(a.node, this.node), this.parent() && this.parent().add(), c && c.add(), (a.paper = this.paper), this;
                        }),
                        (m.after = function (a) {
                            a = u(a);
                            var b = a.parent();
                            return (
                                this.node.nextSibling ? this.node.parentNode.insertBefore(a.node, this.node.nextSibling) : this.node.parentNode.appendChild(a.node),
                                this.parent() && this.parent().add(),
                                b && b.add(),
                                (a.paper = this.paper),
                                this
                            );
                        }),
                        (m.insertBefore = function (a) {
                            a = u(a);
                            var b = this.parent();
                            return a.node.parentNode.insertBefore(this.node, a.node), (this.paper = a.paper), b && b.add(), a.parent() && a.parent().add(), this;
                        }),
                        (m.insertAfter = function (a) {
                            a = u(a);
                            var b = this.parent();
                            return a.node.parentNode.insertBefore(this.node, a.node.nextSibling), (this.paper = a.paper), b && b.add(), a.parent() && a.parent().add(), this;
                        }),
                        (m.remove = function () {
                            var a = this.parent();
                            return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, (this.removed = !0), a && a.add(), this;
                        }),
                        (m.select = function (a) {
                            return u(this.node.querySelector(a));
                        }),
                        (m.selectAll = function (a) {
                            for (var b = this.node.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(u(b[e]));
                            return c;
                        }),
                        (m.asPX = function (a, b) {
                            return null == b && (b = this.attr(a)), +p(this, a, b);
                        }),
                        (m.use = function () {
                            var a,
                                b = this.node.id;
                            return (
                                b || ((b = this.id), q(this.node, { id: b })),
                                (a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? r(this.type, this.node.parentNode) : r("use", this.node.parentNode)),
                                q(a.node, { "xlink:href": "#" + b }),
                                (a.original = this),
                                a
                            );
                        }),
                        (m.clone = function () {
                            var a = u(this.node.cloneNode(!0));
                            return q(a.node, "id") && q(a.node, { id: a.id }), j(a), a.insertAfter(this), a;
                        }),
                        (m.toDefs = function () {
                            var a = s(this);
                            return a.appendChild(this.node), this;
                        }),
                        (m.pattern = m.toPattern = function (a, b, c, d) {
                            var e = r("pattern", s(this));
                            return (
                                null == a && (a = this.getBBox()),
                                n(a, "object") && "x" in a && ((b = a.y), (c = a.width), (d = a.height), (a = a.x)),
                                q(e.node, { x: a, y: b, width: c, height: d, patternUnits: "userSpaceOnUse", id: e.id, viewBox: [a, b, c, d].join(" ") }),
                                e.node.appendChild(this.node),
                                e
                            );
                        }),
                        (m.marker = function (a, b, c, d, e, f) {
                            var g = r("marker", s(this));
                            return (
                                null == a && (a = this.getBBox()),
                                n(a, "object") && "x" in a && ((b = a.y), (c = a.width), (d = a.height), (e = a.refX || a.cx), (f = a.refY || a.cy), (a = a.x)),
                                q(g.node, { viewBox: [a, b, c, d].join(" "), markerWidth: c, markerHeight: d, orient: "auto", refX: e || 0, refY: f || 0, id: g.id }),
                                g.node.appendChild(this.node),
                                g
                            );
                        });
                    var w = function (a, b, d, e) {
                        "function" != typeof d || d.length || ((e = d), (d = c.linear)), (this.attr = a), (this.dur = b), d && (this.easing = d), e && (this.callback = e);
                    };
                    (d._.Animation = w),
                        (d.animation = function (a, b, c, d) {
                            return new w(a, b, c, d);
                        }),
                        (m.inAnim = function () {
                            var a = this,
                                b = [];
                            for (var c in a.anims)
                                a.anims[t](c) &&
                                    !(function (a) {
                                        b.push({
                                            anim: new w(a._attrs, a.dur, a.easing, a._callback),
                                            mina: a,
                                            curStatus: a.status(),
                                            status: function (b) {
                                                return a.status(b);
                                            },
                                            stop: function () {
                                                a.stop();
                                            },
                                        });
                                    })(a.anims[c]);
                            return b;
                        }),
                        (d.animate = function (a, d, e, f, g, h) {
                            "function" != typeof g || g.length || ((h = g), (g = c.linear));
                            var i = c.time(),
                                j = c(a, d, i, i + f, c.time, e, g);
                            return h && b.once("mina.finish." + j.id, h), j;
                        }),
                        (m.stop = function () {
                            for (var a = this.inAnim(), b = 0, c = a.length; c > b; b++) a[b].stop();
                            return this;
                        }),
                        (m.animate = function (a, d, e, f) {
                            "function" != typeof e || e.length || ((f = e), (e = c.linear)), a instanceof w && ((f = a.callback), (e = a.easing), (d = a.dur), (a = a.attr));
                            var g,
                                h,
                                i,
                                j,
                                l = [],
                                m = [],
                                p = {},
                                q = this;
                            for (var r in a)
                                if (a[t](r)) {
                                    q.equal ? ((j = q.equal(r, o(a[r]))), (g = j.from), (h = j.to), (i = j.f)) : ((g = +q.attr(r)), (h = +a[r]));
                                    var s = n(g, "array") ? g.length : 1;
                                    (p[r] = k(l.length, l.length + s, i)), (l = l.concat(g)), (m = m.concat(h));
                                }
                            var u = c.time(),
                                v = c(
                                    l,
                                    m,
                                    u,
                                    u + d,
                                    c.time,
                                    function (a) {
                                        var b = {};
                                        for (var c in p) p[t](c) && (b[c] = p[c](a));
                                        q.attr(b);
                                    },
                                    e
                                );
                            return (
                                (q.anims[v.id] = v),
                                (v._attrs = a),
                                (v._callback = f),
                                b("snap.animcreated." + q.id, v),
                                b.once("mina.finish." + v.id, function () {
                                    delete q.anims[v.id], f && f.call(q);
                                }),
                                b.once("mina.stop." + v.id, function () {
                                    delete q.anims[v.id];
                                }),
                                q
                            );
                        });
                    var x = {};
                    (m.data = function (a, c) {
                        var e = (x[this.id] = x[this.id] || {});
                        if (0 == arguments.length) return b("snap.data.get." + this.id, this, e, null), e;
                        if (1 == arguments.length) {
                            if (d.is(a, "object")) {
                                for (var f in a) a[t](f) && this.data(f, a[f]);
                                return this;
                            }
                            return b("snap.data.get." + this.id, this, e[a], a), e[a];
                        }
                        return (e[a] = c), b("snap.data.set." + this.id, this, c, a), this;
                    }),
                        (m.removeData = function (a) {
                            return null == a ? (x[this.id] = {}) : x[this.id] && delete x[this.id][a], this;
                        }),
                        (m.outerSVG = m.toString = l(1)),
                        (m.innerSVG = l()),
                        (m.toDataURL = function () {
                            if (a && a.btoa) {
                                var b = this.getBBox(),
                                    c = d.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                                        x: +b.x.toFixed(3),
                                        y: +b.y.toFixed(3),
                                        width: +b.width.toFixed(3),
                                        height: +b.height.toFixed(3),
                                        contents: this.outerSVG(),
                                    });
                                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(c)));
                            }
                        }),
                        (h.prototype.select = m.select),
                        (h.prototype.selectAll = m.selectAll);
                }),
                d.plugin(function (a) {
                    function b(a, b, d, e, f, g) {
                        return null == b && "[object SVGMatrix]" == c.call(a)
                            ? ((this.a = a.a), (this.b = a.b), (this.c = a.c), (this.d = a.d), (this.e = a.e), void (this.f = a.f))
                            : void (null != a ? ((this.a = +a), (this.b = +b), (this.c = +d), (this.d = +e), (this.e = +f), (this.f = +g)) : ((this.a = 1), (this.b = 0), (this.c = 0), (this.d = 1), (this.e = 0), (this.f = 0)));
                    }
                    var c = Object.prototype.toString,
                        d = String,
                        e = Math,
                        f = "";
                    !(function (c) {
                        function g(a) {
                            return a[0] * a[0] + a[1] * a[1];
                        }
                        function h(a) {
                            var b = e.sqrt(g(a));
                            a[0] && (a[0] /= b), a[1] && (a[1] /= b);
                        }
                        (c.add = function (a, c, d, e, f, g) {
                            var h,
                                i,
                                j,
                                k,
                                l = [[], [], []],
                                m = [
                                    [this.a, this.c, this.e],
                                    [this.b, this.d, this.f],
                                    [0, 0, 1],
                                ],
                                n = [
                                    [a, d, f],
                                    [c, e, g],
                                    [0, 0, 1],
                                ];
                            for (
                                a &&
                                a instanceof b &&
                                (n = [
                                    [a.a, a.c, a.e],
                                    [a.b, a.d, a.f],
                                    [0, 0, 1],
                                ]),
                                h = 0;
                                3 > h;
                                h++
                            )
                                for (i = 0; 3 > i; i++) {
                                    for (k = 0, j = 0; 3 > j; j++) k += m[h][j] * n[j][i];
                                    l[h][i] = k;
                                }
                            return (this.a = l[0][0]), (this.b = l[1][0]), (this.c = l[0][1]), (this.d = l[1][1]), (this.e = l[0][2]), (this.f = l[1][2]), this;
                        }),
                            (c.invert = function () {
                                var a = this,
                                    c = a.a * a.d - a.b * a.c;
                                return new b(a.d / c, -a.b / c, -a.c / c, a.a / c, (a.c * a.f - a.d * a.e) / c, (a.b * a.e - a.a * a.f) / c);
                            }),
                            (c.clone = function () {
                                return new b(this.a, this.b, this.c, this.d, this.e, this.f);
                            }),
                            (c.translate = function (a, b) {
                                return this.add(1, 0, 0, 1, a, b);
                            }),
                            (c.scale = function (a, b, c, d) {
                                return null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d), this;
                            }),
                            (c.rotate = function (b, c, d) {
                                (b = a.rad(b)), (c = c || 0), (d = d || 0);
                                var f = +e.cos(b).toFixed(9),
                                    g = +e.sin(b).toFixed(9);
                                return this.add(f, g, -g, f, c, d), this.add(1, 0, 0, 1, -c, -d);
                            }),
                            (c.x = function (a, b) {
                                return a * this.a + b * this.c + this.e;
                            }),
                            (c.y = function (a, b) {
                                return a * this.b + b * this.d + this.f;
                            }),
                            (c.get = function (a) {
                                return +this[d.fromCharCode(97 + a)].toFixed(4);
                            }),
                            (c.toString = function () {
                                return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
                            }),
                            (c.offset = function () {
                                return [this.e.toFixed(4), this.f.toFixed(4)];
                            }),
                            (c.determinant = function () {
                                return this.a * this.d - this.b * this.c;
                            }),
                            (c.split = function () {
                                var b = {};
                                (b.dx = this.e), (b.dy = this.f);
                                var c = [
                                    [this.a, this.c],
                                    [this.b, this.d],
                                ];
                                (b.scalex = e.sqrt(g(c[0]))),
                                    h(c[0]),
                                    (b.shear = c[0][0] * c[1][0] + c[0][1] * c[1][1]),
                                    (c[1] = [c[1][0] - c[0][0] * b.shear, c[1][1] - c[0][1] * b.shear]),
                                    (b.scaley = e.sqrt(g(c[1]))),
                                    h(c[1]),
                                    (b.shear /= b.scaley),
                                    this.determinant() < 0 && (b.scalex = -b.scalex);
                                var d = -c[0][1],
                                    f = c[1][1];
                                return (
                                    0 > f ? ((b.rotate = a.deg(e.acos(f))), 0 > d && (b.rotate = 360 - b.rotate)) : (b.rotate = a.deg(e.asin(d))),
                                    (b.isSimple = !(+b.shear.toFixed(9) || (b.scalex.toFixed(9) != b.scaley.toFixed(9) && b.rotate))),
                                    (b.isSuperSimple = !+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9) && !b.rotate),
                                    (b.noRotation = !+b.shear.toFixed(9) && !b.rotate),
                                    b
                                );
                            }),
                            (c.toTransformString = function (a) {
                                var b = a || this.split();
                                return +b.shear.toFixed(9)
                                    ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
                                    : ((b.scalex = +b.scalex.toFixed(4)),
                                        (b.scaley = +b.scaley.toFixed(4)),
                                        (b.rotate = +b.rotate.toFixed(4)),
                                        (b.dx || b.dy ? "t" + [+b.dx.toFixed(4), +b.dy.toFixed(4)] : f) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : f) + (b.rotate ? "r" + [+b.rotate.toFixed(4), 0, 0] : f));
                            });
                    })(b.prototype),
                        (a.Matrix = b),
                        (a.matrix = function (a, c, d, e, f, g) {
                            return new b(a, c, d, e, f, g);
                        });
                }),
                d.plugin(function (a, c, d, e, f) {
                    function g(d) {
                        return function (e) {
                            if (
                                (b.stop(),
                                    e instanceof f &&
                                    1 == e.node.childNodes.length &&
                                    ("radialGradient" == e.node.firstChild.tagName || "linearGradient" == e.node.firstChild.tagName || "pattern" == e.node.firstChild.tagName) &&
                                    ((e = e.node.firstChild), n(this).appendChild(e), (e = l(e))),
                                    e instanceof c)
                            )
                                if ("radialGradient" == e.type || "linearGradient" == e.type || "pattern" == e.type) {
                                    e.node.id || p(e.node, { id: e.id });
                                    var g = q(e.node.id);
                                } else g = e.attr(d);
                            else if (((g = a.color(e)), g.error)) {
                                var h = a(n(this).ownerSVGElement).gradient(e);
                                h ? (h.node.id || p(h.node, { id: h.id }), (g = q(h.node.id))) : (g = e);
                            } else g = r(g);
                            var i = {};
                            (i[d] = g), p(this.node, i), (this.node.style[d] = t);
                        };
                    }
                    function h(a) {
                        b.stop(), a == +a && (a += "px"), (this.node.style.fontSize = a);
                    }
                    function i(a) {
                        for (var b = [], c = a.childNodes, d = 0, e = c.length; e > d; d++) {
                            var f = c[d];
                            3 == f.nodeType && b.push(f.nodeValue), "tspan" == f.tagName && b.push(1 == f.childNodes.length && 3 == f.firstChild.nodeType ? f.firstChild.nodeValue : i(f));
                        }
                        return b;
                    }
                    function j() {
                        return b.stop(), this.node.style.fontSize;
                    }
                    var k = a._.make,
                        l = a._.wrap,
                        m = a.is,
                        n = a._.getSomeDefs,
                        o = /^url\(#?([^)]+)\)$/,
                        p = a._.$,
                        q = a.url,
                        r = String,
                        s = a._.separator,
                        t = "";
                    b.on("snap.util.attr.mask", function (a) {
                        if (a instanceof c || a instanceof f) {
                            if ((b.stop(), a instanceof f && 1 == a.node.childNodes.length && ((a = a.node.firstChild), n(this).appendChild(a), (a = l(a))), "mask" == a.type)) var d = a;
                            else (d = k("mask", n(this))), d.node.appendChild(a.node);
                            !d.node.id && p(d.node, { id: d.id }), p(this.node, { mask: q(d.id) });
                        }
                    }),
                        (function (a) {
                            b.on("snap.util.attr.clip", a), b.on("snap.util.attr.clip-path", a), b.on("snap.util.attr.clipPath", a);
                        })(function (a) {
                            if (a instanceof c || a instanceof f) {
                                if ((b.stop(), "clipPath" == a.type)) var d = a;
                                else (d = k("clipPath", n(this))), d.node.appendChild(a.node), !d.node.id && p(d.node, { id: d.id });
                                p(this.node, { "clip-path": q(d.node.id || d.id) });
                            }
                        }),
                        b.on("snap.util.attr.fill", g("fill")),
                        b.on("snap.util.attr.stroke", g("stroke"));
                    var u = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
                    b.on("snap.util.grad.parse", function (a) {
                        a = r(a);
                        var b = a.match(u);
                        if (!b) return null;
                        var c = b[1],
                            d = b[2],
                            e = b[3];
                        return (
                            (d = d.split(/\s*,\s*/).map(function (a) {
                                return +a == a ? +a : a;
                            })),
                            1 == d.length && 0 == d[0] && (d = []),
                            (e = e.split("-")),
                            (e = e.map(function (a) {
                                a = a.split(":");
                                var b = { color: a[0] };
                                return a[1] && (b.offset = parseFloat(a[1])), b;
                            })),
                            { type: c, params: d, stops: e }
                        );
                    }),
                        b.on("snap.util.attr.d", function (c) {
                            b.stop(), m(c, "array") && m(c[0], "array") && (c = a.path.toString.call(c)), (c = r(c)), c.match(/[ruo]/i) && (c = a.path.toAbsolute(c)), p(this.node, { d: c });
                        })(-1),
                        b.on("snap.util.attr.#text", function (a) {
                            b.stop(), (a = r(a));
                            for (var c = e.doc.createTextNode(a); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                            this.node.appendChild(c);
                        })(-1),
                        b.on("snap.util.attr.path", function (a) {
                            b.stop(), this.attr({ d: a });
                        })(-1),
                        b.on("snap.util.attr.class", function (a) {
                            b.stop(), (this.node.className.baseVal = a);
                        })(-1),
                        b.on("snap.util.attr.viewBox", function (a) {
                            var c;
                            (c = m(a, "object") && "x" in a ? [a.x, a.y, a.width, a.height].join(" ") : m(a, "array") ? a.join(" ") : a), p(this.node, { viewBox: c }), b.stop();
                        })(-1),
                        b.on("snap.util.attr.transform", function (a) {
                            this.transform(a), b.stop();
                        })(-1),
                        b.on("snap.util.attr.r", function (a) {
                            "rect" == this.type && (b.stop(), p(this.node, { rx: a, ry: a }));
                        })(-1),
                        b.on("snap.util.attr.textpath", function (a) {
                            if ((b.stop(), "text" == this.type)) {
                                var d, e, f;
                                if (!a && this.textPath) {
                                    for (e = this.textPath; e.node.firstChild;) this.node.appendChild(e.node.firstChild);
                                    return e.remove(), void delete this.textPath;
                                }
                                if (m(a, "string")) {
                                    var g = n(this),
                                        h = l(g.parentNode).path(a);
                                    g.appendChild(h.node), (d = h.id), h.attr({ id: d });
                                } else (a = l(a)), a instanceof c && ((d = a.attr("id")), d || ((d = a.id), a.attr({ id: d })));
                                if (d)
                                    if (((e = this.textPath), (f = this.node), e)) e.attr({ "xlink:href": "#" + d });
                                    else {
                                        for (e = p("textPath", { "xlink:href": "#" + d }); f.firstChild;) e.appendChild(f.firstChild);
                                        f.appendChild(e), (this.textPath = l(e));
                                    }
                            }
                        })(-1),
                        b.on("snap.util.attr.text", function (a) {
                            if ("text" == this.type) {
                                for (
                                    var c = this.node,
                                    d = function (a) {
                                        var b = p("tspan");
                                        if (m(a, "array")) for (var c = 0; c < a.length; c++) b.appendChild(d(a[c]));
                                        else b.appendChild(e.doc.createTextNode(a));
                                        return b.normalize && b.normalize(), b;
                                    };
                                    c.firstChild;

                                )
                                    c.removeChild(c.firstChild);
                                for (var f = d(a); f.firstChild;) c.appendChild(f.firstChild);
                            }
                            b.stop();
                        })(-1),
                        b.on("snap.util.attr.fontSize", h)(-1),
                        b.on("snap.util.attr.font-size", h)(-1),
                        b.on("snap.util.getattr.transform", function () {
                            return b.stop(), this.transform();
                        })(-1),
                        b.on("snap.util.getattr.textpath", function () {
                            return b.stop(), this.textPath;
                        })(-1),
                        (function () {
                            function c(c) {
                                return function () {
                                    b.stop();
                                    var d = e.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + c);
                                    return "none" == d ? d : a(e.doc.getElementById(d.match(o)[1]));
                                };
                            }
                            function d(a) {
                                return function (c) {
                                    b.stop();
                                    var d = "marker" + a.charAt(0).toUpperCase() + a.substring(1);
                                    if ("" == c || !c) return void (this.node.style[d] = "none");
                                    if ("marker" == c.type) {
                                        var e = c.node.id;
                                        return e || p(c.node, { id: c.id }), void (this.node.style[d] = q(e));
                                    }
                                };
                            }
                            b.on("snap.util.getattr.marker-end", c("end"))(-1),
                                b.on("snap.util.getattr.markerEnd", c("end"))(-1),
                                b.on("snap.util.getattr.marker-start", c("start"))(-1),
                                b.on("snap.util.getattr.markerStart", c("start"))(-1),
                                b.on("snap.util.getattr.marker-mid", c("mid"))(-1),
                                b.on("snap.util.getattr.markerMid", c("mid"))(-1),
                                b.on("snap.util.attr.marker-end", d("end"))(-1),
                                b.on("snap.util.attr.markerEnd", d("end"))(-1),
                                b.on("snap.util.attr.marker-start", d("start"))(-1),
                                b.on("snap.util.attr.markerStart", d("start"))(-1),
                                b.on("snap.util.attr.marker-mid", d("mid"))(-1),
                                b.on("snap.util.attr.markerMid", d("mid"))(-1);
                        })(),
                        b.on("snap.util.getattr.r", function () {
                            return "rect" == this.type && p(this.node, "rx") == p(this.node, "ry") ? (b.stop(), p(this.node, "rx")) : void 0;
                        })(-1),
                        b.on("snap.util.getattr.text", function () {
                            if ("text" == this.type || "tspan" == this.type) {
                                b.stop();
                                var a = i(this.node);
                                return 1 == a.length ? a[0] : a;
                            }
                        })(-1),
                        b.on("snap.util.getattr.#text", function () {
                            return this.node.textContent;
                        })(-1),
                        b.on("snap.util.getattr.viewBox", function () {
                            b.stop();
                            var c = p(this.node, "viewBox");
                            return c ? ((c = c.split(s)), a._.box(+c[0], +c[1], +c[2], +c[3])) : void 0;
                        })(-1),
                        b.on("snap.util.getattr.points", function () {
                            var a = p(this.node, "points");
                            return b.stop(), a ? a.split(s) : void 0;
                        })(-1),
                        b.on("snap.util.getattr.path", function () {
                            var a = p(this.node, "d");
                            return b.stop(), a;
                        })(-1),
                        b.on("snap.util.getattr.class", function () {
                            return this.node.className.baseVal;
                        })(-1),
                        b.on("snap.util.getattr.fontSize", j)(-1),
                        b.on("snap.util.getattr.font-size", j)(-1);
                }),
                d.plugin(function (a, b) {
                    var c = /\S+/g,
                        d = String,
                        e = b.prototype;
                    (e.addClass = function (a) {
                        var b,
                            e,
                            f,
                            g,
                            h = d(a || "").match(c) || [],
                            i = this.node,
                            j = i.className.baseVal,
                            k = j.match(c) || [];
                        if (h.length) {
                            for (b = 0; (f = h[b++]);) (e = k.indexOf(f)), ~e || k.push(f);
                            (g = k.join(" ")), j != g && (i.className.baseVal = g);
                        }
                        return this;
                    }),
                        (e.removeClass = function (a) {
                            var b,
                                e,
                                f,
                                g,
                                h = d(a || "").match(c) || [],
                                i = this.node,
                                j = i.className.baseVal,
                                k = j.match(c) || [];
                            if (k.length) {
                                for (b = 0; (f = h[b++]);) (e = k.indexOf(f)), ~e && k.splice(e, 1);
                                (g = k.join(" ")), j != g && (i.className.baseVal = g);
                            }
                            return this;
                        }),
                        (e.hasClass = function (a) {
                            var b = this.node,
                                d = b.className.baseVal,
                                e = d.match(c) || [];
                            return !!~e.indexOf(a);
                        }),
                        (e.toggleClass = function (a, b) {
                            if (null != b) return b ? this.addClass(a) : this.removeClass(a);
                            var d,
                                e,
                                f,
                                g,
                                h = (a || "").match(c) || [],
                                i = this.node,
                                j = i.className.baseVal,
                                k = j.match(c) || [];
                            for (d = 0; (f = h[d++]);) (e = k.indexOf(f)), ~e ? k.splice(e, 1) : k.push(f);
                            return (g = k.join(" ")), j != g && (i.className.baseVal = g), this;
                        });
                }),
                d.plugin(function () {
                    function a(a) {
                        return a;
                    }
                    function c(a) {
                        return function (b) {
                            return +b.toFixed(3) + a;
                        };
                    }
                    var d = {
                        "+": function (a, b) {
                            return a + b;
                        },
                        "-": function (a, b) {
                            return a - b;
                        },
                        "/": function (a, b) {
                            return a / b;
                        },
                        "*": function (a, b) {
                            return a * b;
                        },
                    },
                        e = String,
                        f = /[a-z]+$/i,
                        g = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
                    b.on("snap.util.attr", function (a) {
                        var c = e(a).match(g);
                        if (c) {
                            var h = b.nt(),
                                i = h.substring(h.lastIndexOf(".") + 1),
                                j = this.attr(i),
                                k = {};
                            b.stop();
                            var l = c[3] || "",
                                m = j.match(f),
                                n = d[c[1]];
                            if ((m && m == l ? (a = n(parseFloat(j), +c[2])) : ((j = this.asPX(i)), (a = n(this.asPX(i), this.asPX(i, c[2] + l)))), isNaN(j) || isNaN(a))) return;
                            (k[i] = a), this.attr(k);
                        }
                    })(-10),
                        b.on("snap.util.equal", function (h, i) {
                            var j = e(this.attr(h) || ""),
                                k = e(i).match(g);
                            if (k) {
                                b.stop();
                                var l = k[3] || "",
                                    m = j.match(f),
                                    n = d[k[1]];
                                return m && m == l ? { from: parseFloat(j), to: n(parseFloat(j), +k[2]), f: c(m) } : ((j = this.asPX(h)), { from: j, to: n(j, this.asPX(h, k[2] + l)), f: a });
                            }
                        })(-10);
                }),
                d.plugin(function (c, d, e, f) {
                    var g = e.prototype,
                        h = c.is;
                    (g.rect = function (a, b, c, d, e, f) {
                        var g;
                        return null == f && (f = e), h(a, "object") && "[object Object]" == a ? (g = a) : null != a && ((g = { x: a, y: b, width: c, height: d }), null != e && ((g.rx = e), (g.ry = f))), this.el("rect", g);
                    }),
                        (g.circle = function (a, b, c) {
                            var d;
                            return h(a, "object") && "[object Object]" == a ? (d = a) : null != a && (d = { cx: a, cy: b, r: c }), this.el("circle", d);
                        });
                    var i = (function () {
                        function a() {
                            this.parentNode.removeChild(this);
                        }
                        return function (b, c) {
                            var d = f.doc.createElement("img"),
                                e = f.doc.body;
                            (d.style.cssText = "position:absolute;left:-9999em;top:-9999em"),
                                (d.onload = function () {
                                    c.call(d), (d.onload = d.onerror = null), e.removeChild(d);
                                }),
                                (d.onerror = a),
                                e.appendChild(d),
                                (d.src = b);
                        };
                    })();
                    (g.image = function (a, b, d, e, f) {
                        var g = this.el("image");
                        if (h(a, "object") && "src" in a) g.attr(a);
                        else if (null != a) {
                            var j = { "xlink:href": a, preserveAspectRatio: "none" };
                            null != b && null != d && ((j.x = b), (j.y = d)),
                                null != e && null != f
                                    ? ((j.width = e), (j.height = f))
                                    : i(a, function () {
                                        c._.$(g.node, { width: this.offsetWidth, height: this.offsetHeight });
                                    }),
                                c._.$(g.node, j);
                        }
                        return g;
                    }),
                        (g.ellipse = function (a, b, c, d) {
                            var e;
                            return h(a, "object") && "[object Object]" == a ? (e = a) : null != a && (e = { cx: a, cy: b, rx: c, ry: d }), this.el("ellipse", e);
                        }),
                        (g.path = function (a) {
                            var b;
                            return h(a, "object") && !h(a, "array") ? (b = a) : a && (b = { d: a }), this.el("path", b);
                        }),
                        (g.group = g.g = function (a) {
                            var b = this.el("g");
                            return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b;
                        }),
                        (g.svg = function (a, b, c, d, e, f, g, i) {
                            var j = {};
                            return (
                                h(a, "object") && null == b
                                    ? (j = a)
                                    : (null != a && (j.x = a), null != b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != g && null != i && (j.viewBox = [e, f, g, i])),
                                this.el("svg", j)
                            );
                        }),
                        (g.mask = function (a) {
                            var b = this.el("mask");
                            return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b;
                        }),
                        (g.ptrn = function (a, b, c, d, e, f, g, i) {
                            if (h(a, "object")) var j = a;
                            else
                                (j = { patternUnits: "userSpaceOnUse" }),
                                    a && (j.x = a),
                                    b && (j.y = b),
                                    null != c && (j.width = c),
                                    null != d && (j.height = d),
                                    (j.viewBox = null != e && null != f && null != g && null != i ? [e, f, g, i] : [a || 0, b || 0, c || 0, d || 0]);
                            return this.el("pattern", j);
                        }),
                        (g.use = function (a) {
                            return null != a
                                ? (a instanceof d && (a.attr("id") || a.attr({ id: c._.id(a) }), (a = a.attr("id"))), "#" == String(a).charAt() && (a = a.substring(1)), this.el("use", { "xlink:href": "#" + a }))
                                : d.prototype.use.call(this);
                        }),
                        (g.symbol = function (a, b, c, d) {
                            var e = {};
                            return null != a && null != b && null != c && null != d && (e.viewBox = [a, b, c, d]), this.el("symbol", e);
                        }),
                        (g.text = function (a, b, c) {
                            var d = {};
                            return h(a, "object") ? (d = a) : null != a && (d = { x: a, y: b, text: c || "" }), this.el("text", d);
                        }),
                        (g.line = function (a, b, c, d) {
                            var e = {};
                            return h(a, "object") ? (e = a) : null != a && (e = { x1: a, x2: c, y1: b, y2: d }), this.el("line", e);
                        }),
                        (g.polyline = function (a) {
                            arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
                            var b = {};
                            return h(a, "object") && !h(a, "array") ? (b = a) : null != a && (b = { points: a }), this.el("polyline", b);
                        }),
                        (g.polygon = function (a) {
                            arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
                            var b = {};
                            return h(a, "object") && !h(a, "array") ? (b = a) : null != a && (b = { points: a }), this.el("polygon", b);
                        }),
                        (function () {
                            function d() {
                                return this.selectAll("stop");
                            }
                            function e(a, b) {
                                var d = k("stop"),
                                    e = { offset: +b + "%" };
                                return (a = c.color(a)), (e["stop-color"] = a.hex), a.opacity < 1 && (e["stop-opacity"] = a.opacity), k(d, e), this.node.appendChild(d), this;
                            }
                            function f() {
                                if ("linearGradient" == this.type) {
                                    var a = k(this.node, "x1") || 0,
                                        b = k(this.node, "x2") || 1,
                                        d = k(this.node, "y1") || 0,
                                        e = k(this.node, "y2") || 0;
                                    return c._.box(a, d, math.abs(b - a), math.abs(e - d));
                                }
                                var f = this.node.cx || 0.5,
                                    g = this.node.cy || 0.5,
                                    h = this.node.r || 0;
                                return c._.box(f - h, g - h, 2 * h, 2 * h);
                            }
                            function h(a, c) {
                                function d(a, b) {
                                    for (var c = (b - l) / (a - m), d = m; a > d; d++) g[d].offset = +(+l + c * (d - m)).toFixed(2);
                                    (m = a), (l = b);
                                }
                                var e,
                                    f = b("snap.util.grad.parse", null, c).firstDefined();
                                if (!f) return null;
                                f.params.unshift(a), (e = "l" == f.type.toLowerCase() ? i.apply(0, f.params) : j.apply(0, f.params)), f.type != f.type.toLowerCase() && k(e.node, { gradientUnits: "userSpaceOnUse" });
                                var g = f.stops,
                                    h = g.length,
                                    l = 0,
                                    m = 0;
                                h--;
                                for (var n = 0; h > n; n++) "offset" in g[n] && d(n, g[n].offset);
                                for (g[h].offset = g[h].offset || 100, d(h, g[h].offset), n = 0; h >= n; n++) {
                                    var o = g[n];
                                    e.addStop(o.color, o.offset);
                                }
                                return e;
                            }
                            function i(a, b, g, h, i) {
                                var j = c._.make("linearGradient", a);
                                return (j.stops = d), (j.addStop = e), (j.getBBox = f), null != b && k(j.node, { x1: b, y1: g, x2: h, y2: i }), j;
                            }
                            function j(a, b, g, h, i, j) {
                                var l = c._.make("radialGradient", a);
                                return (l.stops = d), (l.addStop = e), (l.getBBox = f), null != b && k(l.node, { cx: b, cy: g, r: h }), null != i && null != j && k(l.node, { fx: i, fy: j }), l;
                            }
                            var k = c._.$;
                            (g.gradient = function (a) {
                                return h(this.defs, a);
                            }),
                                (g.gradientLinear = function (a, b, c, d) {
                                    return i(this.defs, a, b, c, d);
                                }),
                                (g.gradientRadial = function (a, b, c, d, e) {
                                    return j(this.defs, a, b, c, d, e);
                                }),
                                (g.toString = function () {
                                    var a,
                                        b = this.node.ownerDocument,
                                        d = b.createDocumentFragment(),
                                        e = b.createElement("div"),
                                        f = this.node.cloneNode(!0);
                                    return d.appendChild(e), e.appendChild(f), c._.$(f, { xmlns: "http://www.w3.org/2000/svg" }), (a = e.innerHTML), d.removeChild(d.firstChild), a;
                                }),
                                (g.toDataURL = function () {
                                    return a && a.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0;
                                }),
                                (g.clear = function () {
                                    for (var a, b = this.node.firstChild; b;) (a = b.nextSibling), "defs" != b.tagName ? b.parentNode.removeChild(b) : g.clear.call({ node: b }), (b = a);
                                });
                        })();
                }),
                d.plugin(function (a, b) {
                    function c(a) {
                        var b = (c.ps = c.ps || {});
                        return (
                            b[a] ? (b[a].sleep = 100) : (b[a] = { sleep: 100 }),
                            setTimeout(function () {
                                for (var c in b) b[K](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c]);
                            }),
                            b[a]
                        );
                    }
                    function d(a, b, c, d) {
                        return (
                            null == a && (a = b = c = d = 0),
                            null == b && ((b = a.y), (c = a.width), (d = a.height), (a = a.x)),
                            {
                                x: a,
                                y: b,
                                width: c,
                                w: c,
                                height: d,
                                h: d,
                                x2: a + c,
                                y2: b + d,
                                cx: a + c / 2,
                                cy: b + d / 2,
                                r1: N.min(c, d) / 2,
                                r2: N.max(c, d) / 2,
                                r0: N.sqrt(c * c + d * d) / 2,
                                path: w(a, b, c, d),
                                vb: [a, b, c, d].join(" "),
                            }
                        );
                    }
                    function e() {
                        return this.join(",").replace(L, "$1");
                    }
                    function f(a) {
                        var b = J(a);
                        return (b.toString = e), b;
                    }
                    function g(a, b, c, d, e, f, g, h, j) {
                        return null == j ? n(a, b, c, d, e, f, g, h) : i(a, b, c, d, e, f, g, h, o(a, b, c, d, e, f, g, h, j));
                    }
                    function h(c, d) {
                        function e(a) {
                            return +(+a).toFixed(3);
                        }
                        return a._.cacher(
                            function (a, f, h) {
                                a instanceof b && (a = a.attr("d")), (a = E(a));
                                for (var j, k, l, m, n, o = "", p = {}, q = 0, r = 0, s = a.length; s > r; r++) {
                                    if (((l = a[r]), "M" == l[0])) (j = +l[1]), (k = +l[2]);
                                    else {
                                        if (((m = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6])), q + m > f)) {
                                            if (d && !p.start) {
                                                if (((n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q)), (o += ["C" + e(n.start.x), e(n.start.y), e(n.m.x), e(n.m.y), e(n.x), e(n.y)]), h)) return o;
                                                (p.start = o), (o = ["M" + e(n.x), e(n.y) + "C" + e(n.n.x), e(n.n.y), e(n.end.x), e(n.end.y), e(l[5]), e(l[6])].join()), (q += m), (j = +l[5]), (k = +l[6]);
                                                continue;
                                            }
                                            if (!c && !d) return (n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q));
                                        }
                                        (q += m), (j = +l[5]), (k = +l[6]);
                                    }
                                    o += l.shift() + l;
                                }
                                return (p.end = o), (n = c ? q : d ? p : i(j, k, l[0], l[1], l[2], l[3], l[4], l[5], 1));
                            },
                            null,
                            a._.clone
                        );
                    }
                    function i(a, b, c, d, e, f, g, h, i) {
                        var j = 1 - i,
                            k = R(j, 3),
                            l = R(j, 2),
                            m = i * i,
                            n = m * i,
                            o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
                            p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
                            q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
                            r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
                            s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
                            t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
                            u = j * a + i * c,
                            v = j * b + i * d,
                            w = j * e + i * g,
                            x = j * f + i * h,
                            y = 90 - (180 * N.atan2(q - s, r - t)) / O;
                        return { x: o, y: p, m: { x: q, y: r }, n: { x: s, y: t }, start: { x: u, y: v }, end: { x: w, y: x }, alpha: y };
                    }
                    function j(b, c, e, f, g, h, i, j) {
                        a.is(b, "array") || (b = [b, c, e, f, g, h, i, j]);
                        var k = D.apply(null, b);
                        return d(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y);
                    }
                    function k(a, b, c) {
                        return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height;
                    }
                    function l(a, b) {
                        return (
                            (a = d(a)),
                            (b = d(b)),
                            k(b, a.x, a.y) ||
                            k(b, a.x2, a.y) ||
                            k(b, a.x, a.y2) ||
                            k(b, a.x2, a.y2) ||
                            k(a, b.x, b.y) ||
                            k(a, b.x2, b.y) ||
                            k(a, b.x, b.y2) ||
                            k(a, b.x2, b.y2) ||
                            (((a.x < b.x2 && a.x > b.x) || (b.x < a.x2 && b.x > a.x)) && ((a.y < b.y2 && a.y > b.y) || (b.y < a.y2 && b.y > a.y)))
                        );
                    }
                    function m(a, b, c, d, e) {
                        var f = -3 * b + 9 * c - 9 * d + 3 * e,
                            g = a * f + 6 * b - 12 * c + 6 * d;
                        return a * g - 3 * b + 3 * c;
                    }
                    function n(a, b, c, d, e, f, g, h, i) {
                        null == i && (i = 1), (i = i > 1 ? 1 : 0 > i ? 0 : i);
                        for (
                            var j = i / 2,
                            k = 12,
                            l = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816],
                            n = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472],
                            o = 0,
                            p = 0;
                            k > p;
                            p++
                        ) {
                            var q = j * l[p] + j,
                                r = m(q, a, c, e, g),
                                s = m(q, b, d, f, h),
                                t = r * r + s * s;
                            o += n[p] * N.sqrt(t);
                        }
                        return j * o;
                    }
                    function o(a, b, c, d, e, f, g, h, i) {
                        if (!(0 > i || n(a, b, c, d, e, f, g, h) < i)) {
                            var j,
                                k = 1,
                                l = k / 2,
                                m = k - l,
                                o = 0.01;
                            for (j = n(a, b, c, d, e, f, g, h, m); S(j - i) > o;) (l /= 2), (m += (i > j ? 1 : -1) * l), (j = n(a, b, c, d, e, f, g, h, m));
                            return m;
                        }
                    }
                    function p(a, b, c, d, e, f, g, h) {
                        if (!(Q(a, c) < P(e, g) || P(a, c) > Q(e, g) || Q(b, d) < P(f, h) || P(b, d) > Q(f, h))) {
                            var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
                                j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
                                k = (a - c) * (f - h) - (b - d) * (e - g);
                            if (k) {
                                var l = i / k,
                                    m = j / k,
                                    n = +l.toFixed(2),
                                    o = +m.toFixed(2);
                                if (
                                    !(
                                        n < +P(a, c).toFixed(2) ||
                                        n > +Q(a, c).toFixed(2) ||
                                        n < +P(e, g).toFixed(2) ||
                                        n > +Q(e, g).toFixed(2) ||
                                        o < +P(b, d).toFixed(2) ||
                                        o > +Q(b, d).toFixed(2) ||
                                        o < +P(f, h).toFixed(2) ||
                                        o > +Q(f, h).toFixed(2)
                                    )
                                )
                                    return { x: l, y: m };
                            }
                        }
                    }
                    function q(a, b, c) {
                        var d = j(a),
                            e = j(b);
                        if (!l(d, e)) return c ? 0 : [];
                        for (var f = n.apply(0, a), g = n.apply(0, b), h = ~~(f / 8), k = ~~(g / 8), m = [], o = [], q = {}, r = c ? 0 : [], s = 0; h + 1 > s; s++) {
                            var t = i.apply(0, a.concat(s / h));
                            m.push({ x: t.x, y: t.y, t: s / h });
                        }
                        for (s = 0; k + 1 > s; s++) (t = i.apply(0, b.concat(s / k))), o.push({ x: t.x, y: t.y, t: s / k });
                        for (s = 0; h > s; s++)
                            for (var u = 0; k > u; u++) {
                                var v = m[s],
                                    w = m[s + 1],
                                    x = o[u],
                                    y = o[u + 1],
                                    z = S(w.x - v.x) < 0.001 ? "y" : "x",
                                    A = S(y.x - x.x) < 0.001 ? "y" : "x",
                                    B = p(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y);
                                if (B) {
                                    if (q[B.x.toFixed(4)] == B.y.toFixed(4)) continue;
                                    q[B.x.toFixed(4)] = B.y.toFixed(4);
                                    var C = v.t + S((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t),
                                        D = x.t + S((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t);
                                    C >= 0 && 1 >= C && D >= 0 && 1 >= D && (c ? r++ : r.push({ x: B.x, y: B.y, t1: C, t2: D }));
                                }
                            }
                        return r;
                    }
                    function r(a, b) {
                        return t(a, b);
                    }
                    function s(a, b) {
                        return t(a, b, 1);
                    }
                    function t(a, b, c) {
                        (a = E(a)), (b = E(b));
                        for (var d, e, f, g, h, i, j, k, l, m, n = c ? 0 : [], o = 0, p = a.length; p > o; o++) {
                            var r = a[o];
                            if ("M" == r[0]) (d = h = r[1]), (e = i = r[2]);
                            else {
                                "C" == r[0] ? ((l = [d, e].concat(r.slice(1))), (d = l[6]), (e = l[7])) : ((l = [d, e, d, e, h, i, h, i]), (d = h), (e = i));
                                for (var s = 0, t = b.length; t > s; s++) {
                                    var u = b[s];
                                    if ("M" == u[0]) (f = j = u[1]), (g = k = u[2]);
                                    else {
                                        "C" == u[0] ? ((m = [f, g].concat(u.slice(1))), (f = m[6]), (g = m[7])) : ((m = [f, g, f, g, j, k, j, k]), (f = j), (g = k));
                                        var v = q(l, m, c);
                                        if (c) n += v;
                                        else {
                                            for (var w = 0, x = v.length; x > w; w++) (v[w].segment1 = o), (v[w].segment2 = s), (v[w].bez1 = l), (v[w].bez2 = m);
                                            n = n.concat(v);
                                        }
                                    }
                                }
                            }
                        }
                        return n;
                    }
                    function u(a, b, c) {
                        var d = v(a);
                        return (
                            k(d, b, c) &&
                            t(
                                a,
                                [
                                    ["M", b, c],
                                    ["H", d.x2 + 10],
                                ],
                                1
                            ) %
                            2 ==
                            1
                        );
                    }
                    function v(a) {
                        var b = c(a);
                        if (b.bbox) return J(b.bbox);
                        if (!a) return d();
                        a = E(a);
                        for (var e, f = 0, g = 0, h = [], i = [], j = 0, k = a.length; k > j; j++)
                            if (((e = a[j]), "M" == e[0])) (f = e[1]), (g = e[2]), h.push(f), i.push(g);
                            else {
                                var l = D(f, g, e[1], e[2], e[3], e[4], e[5], e[6]);
                                (h = h.concat(l.min.x, l.max.x)), (i = i.concat(l.min.y, l.max.y)), (f = e[5]), (g = e[6]);
                            }
                        var m = P.apply(0, h),
                            n = P.apply(0, i),
                            o = Q.apply(0, h),
                            p = Q.apply(0, i),
                            q = d(m, n, o - m, p - n);
                        return (b.bbox = J(q)), q;
                    }
                    function w(a, b, c, d, f) {
                        if (f)
                            return [
                                ["M", +a + +f, b],
                                ["l", c - 2 * f, 0],
                                ["a", f, f, 0, 0, 1, f, f],
                                ["l", 0, d - 2 * f],
                                ["a", f, f, 0, 0, 1, -f, f],
                                ["l", 2 * f - c, 0],
                                ["a", f, f, 0, 0, 1, -f, -f],
                                ["l", 0, 2 * f - d],
                                ["a", f, f, 0, 0, 1, f, -f],
                                ["z"],
                            ];
                        var g = [["M", a, b], ["l", c, 0], ["l", 0, d], ["l", -c, 0], ["z"]];
                        return (g.toString = e), g;
                    }
                    function x(a, b, c, d, f) {
                        if ((null == f && null == d && (d = c), (a = +a), (b = +b), (c = +c), (d = +d), null != f))
                            var g = Math.PI / 180,
                                h = a + c * Math.cos(-d * g),
                                i = a + c * Math.cos(-f * g),
                                j = b + c * Math.sin(-d * g),
                                k = b + c * Math.sin(-f * g),
                                l = [
                                    ["M", h, j],
                                    ["A", c, c, 0, +(f - d > 180), 0, i, k],
                                ];
                        else l = [["M", a, b], ["m", 0, -d], ["a", c, d, 0, 1, 1, 0, 2 * d], ["a", c, d, 0, 1, 1, 0, -2 * d], ["z"]];
                        return (l.toString = e), l;
                    }
                    function y(b) {
                        var d = c(b),
                            g = String.prototype.toLowerCase;
                        if (d.rel) return f(d.rel);
                        (a.is(b, "array") && a.is(b && b[0], "array")) || (b = a.parsePathString(b));
                        var h = [],
                            i = 0,
                            j = 0,
                            k = 0,
                            l = 0,
                            m = 0;
                        "M" == b[0][0] && ((i = b[0][1]), (j = b[0][2]), (k = i), (l = j), m++, h.push(["M", i, j]));
                        for (var n = m, o = b.length; o > n; n++) {
                            var p = (h[n] = []),
                                q = b[n];
                            if (q[0] != g.call(q[0]))
                                switch (((p[0] = g.call(q[0])), p[0])) {
                                    case "a":
                                        (p[1] = q[1]), (p[2] = q[2]), (p[3] = q[3]), (p[4] = q[4]), (p[5] = q[5]), (p[6] = +(q[6] - i).toFixed(3)), (p[7] = +(q[7] - j).toFixed(3));
                                        break;
                                    case "v":
                                        p[1] = +(q[1] - j).toFixed(3);
                                        break;
                                    case "m":
                                        (k = q[1]), (l = q[2]);
                                    default:
                                        for (var r = 1, s = q.length; s > r; r++) p[r] = +(q[r] - (r % 2 ? i : j)).toFixed(3);
                                }
                            else {
                                (p = h[n] = []), "m" == q[0] && ((k = q[1] + i), (l = q[2] + j));
                                for (var t = 0, u = q.length; u > t; t++) h[n][t] = q[t];
                            }
                            var v = h[n].length;
                            switch (h[n][0]) {
                                case "z":
                                    (i = k), (j = l);
                                    break;
                                case "h":
                                    i += +h[n][v - 1];
                                    break;
                                case "v":
                                    j += +h[n][v - 1];
                                    break;
                                default:
                                    (i += +h[n][v - 2]), (j += +h[n][v - 1]);
                            }
                        }
                        return (h.toString = e), (d.rel = f(h)), h;
                    }
                    function z(b) {
                        var d = c(b);
                        if (d.abs) return f(d.abs);
                        if (((I(b, "array") && I(b && b[0], "array")) || (b = a.parsePathString(b)), !b || !b.length)) return [["M", 0, 0]];
                        var g,
                            h = [],
                            i = 0,
                            j = 0,
                            k = 0,
                            l = 0,
                            m = 0;
                        "M" == b[0][0] && ((i = +b[0][1]), (j = +b[0][2]), (k = i), (l = j), m++, (h[0] = ["M", i, j]));
                        for (var n, o, p = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), q = m, r = b.length; r > q; q++) {
                            if ((h.push((n = [])), (o = b[q]), (g = o[0]), g != g.toUpperCase()))
                                switch (((n[0] = g.toUpperCase()), n[0])) {
                                    case "A":
                                        (n[1] = o[1]), (n[2] = o[2]), (n[3] = o[3]), (n[4] = o[4]), (n[5] = o[5]), (n[6] = +o[6] + i), (n[7] = +o[7] + j);
                                        break;
                                    case "V":
                                        n[1] = +o[1] + j;
                                        break;
                                    case "H":
                                        n[1] = +o[1] + i;
                                        break;
                                    case "R":
                                        for (var s = [i, j].concat(o.slice(1)), t = 2, u = s.length; u > t; t++) (s[t] = +s[t] + i), (s[++t] = +s[t] + j);
                                        h.pop(), (h = h.concat(G(s, p)));
                                        break;
                                    case "O":
                                        h.pop(), (s = x(i, j, o[1], o[2])), s.push(s[0]), (h = h.concat(s));
                                        break;
                                    case "U":
                                        h.pop(), (h = h.concat(x(i, j, o[1], o[2], o[3]))), (n = ["U"].concat(h[h.length - 1].slice(-2)));
                                        break;
                                    case "M":
                                        (k = +o[1] + i), (l = +o[2] + j);
                                    default:
                                        for (t = 1, u = o.length; u > t; t++) n[t] = +o[t] + (t % 2 ? i : j);
                                }
                            else if ("R" == g) (s = [i, j].concat(o.slice(1))), h.pop(), (h = h.concat(G(s, p))), (n = ["R"].concat(o.slice(-2)));
                            else if ("O" == g) h.pop(), (s = x(i, j, o[1], o[2])), s.push(s[0]), (h = h.concat(s));
                            else if ("U" == g) h.pop(), (h = h.concat(x(i, j, o[1], o[2], o[3]))), (n = ["U"].concat(h[h.length - 1].slice(-2)));
                            else for (var v = 0, w = o.length; w > v; v++) n[v] = o[v];
                            if (((g = g.toUpperCase()), "O" != g))
                                switch (n[0]) {
                                    case "Z":
                                        (i = +k), (j = +l);
                                        break;
                                    case "H":
                                        i = n[1];
                                        break;
                                    case "V":
                                        j = n[1];
                                        break;
                                    case "M":
                                        (k = n[n.length - 2]), (l = n[n.length - 1]);
                                    default:
                                        (i = n[n.length - 2]), (j = n[n.length - 1]);
                                }
                        }
                        return (h.toString = e), (d.abs = f(h)), h;
                    }
                    function A(a, b, c, d) {
                        return [a, b, c, d, c, d];
                    }
                    function B(a, b, c, d, e, f) {
                        var g = 1 / 3,
                            h = 2 / 3;
                        return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f];
                    }
                    function C(b, c, d, e, f, g, h, i, j, k) {
                        var l,
                            m = (120 * O) / 180,
                            n = (O / 180) * (+f || 0),
                            o = [],
                            p = a._.cacher(function (a, b, c) {
                                var d = a * N.cos(c) - b * N.sin(c),
                                    e = a * N.sin(c) + b * N.cos(c);
                                return { x: d, y: e };
                            });
                        if (k) (y = k[0]), (z = k[1]), (w = k[2]), (x = k[3]);
                        else {
                            (l = p(b, c, -n)), (b = l.x), (c = l.y), (l = p(i, j, -n)), (i = l.x), (j = l.y);
                            var q = (N.cos((O / 180) * f), N.sin((O / 180) * f), (b - i) / 2),
                                r = (c - j) / 2,
                                s = (q * q) / (d * d) + (r * r) / (e * e);
                            s > 1 && ((s = N.sqrt(s)), (d = s * d), (e = s * e));
                            var t = d * d,
                                u = e * e,
                                v = (g == h ? -1 : 1) * N.sqrt(S((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
                                w = (v * d * r) / e + (b + i) / 2,
                                x = (v * -e * q) / d + (c + j) / 2,
                                y = N.asin(((c - x) / e).toFixed(9)),
                                z = N.asin(((j - x) / e).toFixed(9));
                            (y = w > b ? O - y : y), (z = w > i ? O - z : z), 0 > y && (y = 2 * O + y), 0 > z && (z = 2 * O + z), h && y > z && (y -= 2 * O), !h && z > y && (z -= 2 * O);
                        }
                        var A = z - y;
                        if (S(A) > m) {
                            var B = z,
                                D = i,
                                E = j;
                            (z = y + m * (h && z > y ? 1 : -1)), (i = w + d * N.cos(z)), (j = x + e * N.sin(z)), (o = C(i, j, d, e, f, 0, h, D, E, [z, B, w, x]));
                        }
                        A = z - y;
                        var F = N.cos(y),
                            G = N.sin(y),
                            H = N.cos(z),
                            I = N.sin(z),
                            J = N.tan(A / 4),
                            K = (4 / 3) * d * J,
                            L = (4 / 3) * e * J,
                            M = [b, c],
                            P = [b + K * G, c - L * F],
                            Q = [i + K * I, j - L * H],
                            R = [i, j];
                        if (((P[0] = 2 * M[0] - P[0]), (P[1] = 2 * M[1] - P[1]), k)) return [P, Q, R].concat(o);
                        o = [P, Q, R].concat(o).join().split(",");
                        for (var T = [], U = 0, V = o.length; V > U; U++) T[U] = U % 2 ? p(o[U - 1], o[U], n).y : p(o[U], o[U + 1], n).x;
                        return T;
                    }
                    function D(a, b, c, d, e, f, g, h) {
                        for (var i, j, k, l, m, n, o, p, q = [], r = [[], []], s = 0; 2 > s; ++s)
                            if (
                                (0 == s ? ((j = 6 * a - 12 * c + 6 * e), (i = -3 * a + 9 * c - 9 * e + 3 * g), (k = 3 * c - 3 * a)) : ((j = 6 * b - 12 * d + 6 * f), (i = -3 * b + 9 * d - 9 * f + 3 * h), (k = 3 * d - 3 * b)), S(i) < 1e-12)
                            ) {
                                if (S(j) < 1e-12) continue;
                                (l = -k / j), l > 0 && 1 > l && q.push(l);
                            } else (o = j * j - 4 * k * i), (p = N.sqrt(o)), 0 > o || ((m = (-j + p) / (2 * i)), m > 0 && 1 > m && q.push(m), (n = (-j - p) / (2 * i)), n > 0 && 1 > n && q.push(n));
                        for (var t, u = q.length, v = u; u--;)
                            (l = q[u]), (t = 1 - l), (r[0][u] = t * t * t * a + 3 * t * t * l * c + 3 * t * l * l * e + l * l * l * g), (r[1][u] = t * t * t * b + 3 * t * t * l * d + 3 * t * l * l * f + l * l * l * h);
                        return (
                            (r[0][v] = a), (r[1][v] = b), (r[0][v + 1] = g), (r[1][v + 1] = h), (r[0].length = r[1].length = v + 2), { min: { x: P.apply(0, r[0]), y: P.apply(0, r[1]) }, max: { x: Q.apply(0, r[0]), y: Q.apply(0, r[1]) } }
                        );
                    }
                    function E(a, b) {
                        var d = !b && c(a);
                        if (!b && d.curve) return f(d.curve);
                        for (
                            var e = z(a),
                            g = b && z(b),
                            h = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
                            i = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
                            j = function (a, b, c) {
                                var d, e;
                                if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
                                switch ((!(a[0] in { T: 1, Q: 1 }) && (b.qx = b.qy = null), a[0])) {
                                    case "M":
                                        (b.X = a[1]), (b.Y = a[2]);
                                        break;
                                    case "A":
                                        a = ["C"].concat(C.apply(0, [b.x, b.y].concat(a.slice(1))));
                                        break;
                                    case "S":
                                        "C" == c || "S" == c ? ((d = 2 * b.x - b.bx), (e = 2 * b.y - b.by)) : ((d = b.x), (e = b.y)), (a = ["C", d, e].concat(a.slice(1)));
                                        break;
                                    case "T":
                                        "Q" == c || "T" == c ? ((b.qx = 2 * b.x - b.qx), (b.qy = 2 * b.y - b.qy)) : ((b.qx = b.x), (b.qy = b.y)), (a = ["C"].concat(B(b.x, b.y, b.qx, b.qy, a[1], a[2])));
                                        break;
                                    case "Q":
                                        (b.qx = a[1]), (b.qy = a[2]), (a = ["C"].concat(B(b.x, b.y, a[1], a[2], a[3], a[4])));
                                        break;
                                    case "L":
                                        a = ["C"].concat(A(b.x, b.y, a[1], a[2]));
                                        break;
                                    case "H":
                                        a = ["C"].concat(A(b.x, b.y, a[1], b.y));
                                        break;
                                    case "V":
                                        a = ["C"].concat(A(b.x, b.y, b.x, a[1]));
                                        break;
                                    case "Z":
                                        a = ["C"].concat(A(b.x, b.y, b.X, b.Y));
                                }
                                return a;
                            },
                            k = function (a, b) {
                                if (a[b].length > 7) {
                                    a[b].shift();
                                    for (var c = a[b]; c.length;) (m[b] = "A"), g && (n[b] = "A"), a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));
                                    a.splice(b, 1), (r = Q(e.length, (g && g.length) || 0));
                                }
                            },
                            l = function (a, b, c, d, f) {
                                a && b && "M" == a[f][0] && "M" != b[f][0] && (b.splice(f, 0, ["M", d.x, d.y]), (c.bx = 0), (c.by = 0), (c.x = a[f][1]), (c.y = a[f][2]), (r = Q(e.length, (g && g.length) || 0)));
                            },
                            m = [],
                            n = [],
                            o = "",
                            p = "",
                            q = 0,
                            r = Q(e.length, (g && g.length) || 0);
                            r > q;
                            q++
                        ) {
                            e[q] && (o = e[q][0]),
                                "C" != o && ((m[q] = o), q && (p = m[q - 1])),
                                (e[q] = j(e[q], h, p)),
                                "A" != m[q] && "C" == o && (m[q] = "C"),
                                k(e, q),
                                g && (g[q] && (o = g[q][0]), "C" != o && ((n[q] = o), q && (p = n[q - 1])), (g[q] = j(g[q], i, p)), "A" != n[q] && "C" == o && (n[q] = "C"), k(g, q)),
                                l(e, g, h, i, q),
                                l(g, e, i, h, q);
                            var s = e[q],
                                t = g && g[q],
                                u = s.length,
                                v = g && t.length;
                            (h.x = s[u - 2]), (h.y = s[u - 1]), (h.bx = M(s[u - 4]) || h.x), (h.by = M(s[u - 3]) || h.y), (i.bx = g && (M(t[v - 4]) || i.x)), (i.by = g && (M(t[v - 3]) || i.y)), (i.x = g && t[v - 2]), (i.y = g && t[v - 1]);
                        }
                        return g || (d.curve = f(e)), g ? [e, g] : e;
                    }
                    function F(a, b) {
                        if (!b) return a;
                        var c, d, e, f, g, h, i;
                        for (a = E(a), e = 0, g = a.length; g > e; e++) for (i = a[e], f = 1, h = i.length; h > f; f += 2) (c = b.x(i[f], i[f + 1])), (d = b.y(i[f], i[f + 1])), (i[f] = c), (i[f + 1] = d);
                        return a;
                    }
                    function G(a, b) {
                        for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
                            var f = [
                                { x: +a[d - 2], y: +a[d - 1] },
                                { x: +a[d], y: +a[d + 1] },
                                { x: +a[d + 2], y: +a[d + 3] },
                                { x: +a[d + 4], y: +a[d + 5] },
                            ];
                            b
                                ? d
                                    ? e - 4 == d
                                        ? (f[3] = { x: +a[0], y: +a[1] })
                                        : e - 2 == d && ((f[2] = { x: +a[0], y: +a[1] }), (f[3] = { x: +a[2], y: +a[3] }))
                                    : (f[0] = { x: +a[e - 2], y: +a[e - 1] })
                                : e - 4 == d
                                    ? (f[3] = f[2])
                                    : d || (f[0] = { x: +a[d], y: +a[d + 1] }),
                                c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y]);
                        }
                        return c;
                    }
                    var H = b.prototype,
                        I = a.is,
                        J = a._.clone,
                        K = "hasOwnProperty",
                        L = /,?([a-z]),?/gi,
                        M = parseFloat,
                        N = Math,
                        O = N.PI,
                        P = N.min,
                        Q = N.max,
                        R = N.pow,
                        S = N.abs,
                        T = h(1),
                        U = h(),
                        V = h(0, 1),
                        W = a._unit2px,
                        X = {
                            path: function (a) {
                                return a.attr("path");
                            },
                            circle: function (a) {
                                var b = W(a);
                                return x(b.cx, b.cy, b.r);
                            },
                            ellipse: function (a) {
                                var b = W(a);
                                return x(b.cx || 0, b.cy || 0, b.rx, b.ry);
                            },
                            rect: function (a) {
                                var b = W(a);
                                return w(b.x || 0, b.y || 0, b.width, b.height, b.rx, b.ry);
                            },
                            image: function (a) {
                                var b = W(a);
                                return w(b.x || 0, b.y || 0, b.width, b.height);
                            },
                            line: function (a) {
                                return "M" + [a.attr("x1") || 0, a.attr("y1") || 0, a.attr("x2"), a.attr("y2")];
                            },
                            polyline: function (a) {
                                return "M" + a.attr("points");
                            },
                            polygon: function (a) {
                                return "M" + a.attr("points") + "z";
                            },
                            deflt: function (a) {
                                var b = a.node.getBBox();
                                return w(b.x, b.y, b.width, b.height);
                            },
                        };
                    (a.path = c),
                        (a.path.getTotalLength = T),
                        (a.path.getPointAtLength = U),
                        (a.path.getSubpath = function (a, b, c) {
                            if (this.getTotalLength(a) - c < 1e-6) return V(a, b).end;
                            var d = V(a, c, 1);
                            return b ? V(d, b).end : d;
                        }),
                        (H.getTotalLength = function () {
                            return this.node.getTotalLength ? this.node.getTotalLength() : void 0;
                        }),
                        (H.getPointAtLength = function (a) {
                            return U(this.attr("d"), a);
                        }),
                        (H.getSubpath = function (b, c) {
                            return a.path.getSubpath(this.attr("d"), b, c);
                        }),
                        (a._.box = d),
                        (a.path.findDotsAtSegment = i),
                        (a.path.bezierBBox = j),
                        (a.path.isPointInsideBBox = k),
                        (a.closest = function (b, c, e, f) {
                            for (
                                var g = 100,
                                h = d(b - g / 2, c - g / 2, g, g),
                                i = [],
                                j = e[0].hasOwnProperty("x")
                                    ? function (a) {
                                        return { x: e[a].x, y: e[a].y };
                                    }
                                    : function (a) {
                                        return { x: e[a], y: f[a] };
                                    },
                                l = 0;
                                1e6 >= g && !l;

                            ) {
                                for (var m = 0, n = e.length; n > m; m++) {
                                    var o = j(m);
                                    if (k(h, o.x, o.y)) {
                                        l++, i.push(o);
                                        break;
                                    }
                                }
                                l || ((g *= 2), (h = d(b - g / 2, c - g / 2, g, g)));
                            }
                            if (1e6 != g) {
                                var p,
                                    q = 1 / 0;
                                for (m = 0, n = i.length; n > m; m++) {
                                    var r = a.len(b, c, i[m].x, i[m].y);
                                    q > r && ((q = r), (i[m].len = r), (p = i[m]));
                                }
                                return p;
                            }
                        }),
                        (a.path.isBBoxIntersect = l),
                        (a.path.intersection = r),
                        (a.path.intersectionNumber = s),
                        (a.path.isPointInside = u),
                        (a.path.getBBox = v),
                        (a.path.get = X),
                        (a.path.toRelative = y),
                        (a.path.toAbsolute = z),
                        (a.path.toCubic = E),
                        (a.path.map = F),
                        (a.path.toString = e),
                        (a.path.clone = f);
                }),
                d.plugin(function (a) {
                    var d = Math.max,
                        e = Math.min,
                        f = function (a) {
                            if (((this.items = []), (this.bindings = {}), (this.length = 0), (this.type = "set"), a))
                                for (var b = 0, c = a.length; c > b; b++) a[b] && ((this[this.items.length] = this.items[this.items.length] = a[b]), this.length++);
                        },
                        g = f.prototype;
                    (g.push = function () {
                        for (var a, b, c = 0, d = arguments.length; d > c; c++) (a = arguments[c]), a && ((b = this.items.length), (this[b] = this.items[b] = a), this.length++);
                        return this;
                    }),
                        (g.pop = function () {
                            return this.length && delete this[this.length--], this.items.pop();
                        }),
                        (g.forEach = function (a, b) {
                            for (var c = 0, d = this.items.length; d > c; c++) if (a.call(b, this.items[c], c) === !1) return this;
                            return this;
                        }),
                        (g.animate = function (d, e, f, g) {
                            "function" != typeof f || f.length || ((g = f), (f = c.linear)), d instanceof a._.Animation && ((g = d.callback), (f = d.easing), (e = f.dur), (d = d.attr));
                            var h = arguments;
                            if (a.is(d, "array") && a.is(h[h.length - 1], "array")) var i = !0;
                            var j,
                                k = function () {
                                    j ? (this.b = j) : (j = this.b);
                                },
                                l = 0,
                                m = this,
                                n =
                                    g &&
                                    function () {
                                        ++l == m.length && g.call(this);
                                    };
                            return this.forEach(function (a, c) {
                                b.once("snap.animcreated." + a.id, k), i ? h[c] && a.animate.apply(a, h[c]) : a.animate(d, e, f, n);
                            });
                        }),
                        (g.remove = function () {
                            for (; this.length;) this.pop().remove();
                            return this;
                        }),
                        (g.bind = function (a, b, c) {
                            var d = {};
                            if ("function" == typeof b) this.bindings[a] = b;
                            else {
                                var e = c || a;
                                this.bindings[a] = function (a) {
                                    (d[e] = a), b.attr(d);
                                };
                            }
                            return this;
                        }),
                        (g.attr = function (a) {
                            var b = {};
                            for (var c in a) this.bindings[c] ? this.bindings[c](a[c]) : (b[c] = a[c]);
                            for (var d = 0, e = this.items.length; e > d; d++) this.items[d].attr(b);
                            return this;
                        }),
                        (g.clear = function () {
                            for (; this.length;) this.pop();
                        }),
                        (g.splice = function (a, b) {
                            (a = 0 > a ? d(this.length + a, 0) : a), (b = d(0, e(this.length - a, b)));
                            var c,
                                g = [],
                                h = [],
                                i = [];
                            for (c = 2; c < arguments.length; c++) i.push(arguments[c]);
                            for (c = 0; b > c; c++) h.push(this[a + c]);
                            for (; c < this.length - a; c++) g.push(this[a + c]);
                            var j = i.length;
                            for (c = 0; c < j + g.length; c++) this.items[a + c] = this[a + c] = j > c ? i[c] : g[c - j];
                            for (c = this.items.length = this.length -= b - j; this[c];) delete this[c++];
                            return new f(h);
                        }),
                        (g.exclude = function (a) {
                            for (var b = 0, c = this.length; c > b; b++) if (this[b] == a) return this.splice(b, 1), !0;
                            return !1;
                        }),
                        (g.insertAfter = function (a) {
                            for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
                            return this;
                        }),
                        (g.getBBox = function () {
                            for (var a = [], b = [], c = [], f = [], g = this.items.length; g--;)
                                if (!this.items[g].removed) {
                                    var h = this.items[g].getBBox();
                                    a.push(h.x), b.push(h.y), c.push(h.x + h.width), f.push(h.y + h.height);
                                }
                            return (a = e.apply(0, a)), (b = e.apply(0, b)), (c = d.apply(0, c)), (f = d.apply(0, f)), { x: a, y: b, x2: c, y2: f, width: c - a, height: f - b, cx: a + (c - a) / 2, cy: b + (f - b) / 2 };
                        }),
                        (g.clone = function (a) {
                            a = new f();
                            for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
                            return a;
                        }),
                        (g.toString = function () {
                            return "Snap‘s set";
                        }),
                        (g.type = "set"),
                        (a.Set = f),
                        (a.set = function () {
                            var a = new f();
                            return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)), a;
                        });
                }),
                d.plugin(function (a, c) {
                    function d(a) {
                        var b = a[0];
                        switch (b.toLowerCase()) {
                            case "t":
                                return [b, 0, 0];
                            case "m":
                                return [b, 1, 0, 0, 1, 0, 0];
                            case "r":
                                return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
                            case "s":
                                return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1];
                        }
                    }
                    function e(b, c, e) {
                        (c = p(c).replace(/\.{3}|\u2026/g, b)), (b = a.parseTransformString(b) || []), (c = a.parseTransformString(c) || []);
                        for (var f, g, h, i, l = Math.max(b.length, c.length), m = [], n = [], o = 0; l > o; o++) {
                            if (((h = b[o] || d(c[o])), (i = c[o] || d(h)), h[0] != i[0] || ("r" == h[0].toLowerCase() && (h[2] != i[2] || h[3] != i[3])) || ("s" == h[0].toLowerCase() && (h[3] != i[3] || h[4] != i[4])))) {
                                (b = a._.transform2matrix(b, e())), (c = a._.transform2matrix(c, e())), (m = [["m", b.a, b.b, b.c, b.d, b.e, b.f]]), (n = [["m", c.a, c.b, c.c, c.d, c.e, c.f]]);
                                break;
                            }
                            for (m[o] = [], n[o] = [], f = 0, g = Math.max(h.length, i.length); g > f; f++) f in h && (m[o][f] = h[f]), f in i && (n[o][f] = i[f]);
                        }
                        return { from: k(m), to: k(n), f: j(m) };
                    }
                    function f(a) {
                        return a;
                    }
                    function g(a) {
                        return function (b) {
                            return +b.toFixed(3) + a;
                        };
                    }
                    function h(a) {
                        return a.join(" ");
                    }
                    function i(b) {
                        return a.rgb(b[0], b[1], b[2]);
                    }
                    function j(a) {
                        var b,
                            c,
                            d,
                            e,
                            f,
                            g,
                            h = 0,
                            i = [];
                        for (b = 0, c = a.length; c > b; b++) {
                            for (f = "[", g = ['"' + a[b][0] + '"'], d = 1, e = a[b].length; e > d; d++) g[d] = "val[" + h++ + "]";
                            (f += g + "]"), (i[b] = f);
                        }
                        return Function("val", "return Snap.path.toString.call([" + i + "])");
                    }
                    function k(a) {
                        for (var b = [], c = 0, d = a.length; d > c; c++) for (var e = 1, f = a[c].length; f > e; e++) b.push(a[c][e]);
                        return b;
                    }
                    function l(a) {
                        return isFinite(parseFloat(a));
                    }
                    function m(b, c) {
                        return a.is(b, "array") && a.is(c, "array") ? b.toString() == c.toString() : !1;
                    }
                    var n = {},
                        o = /[a-z]+$/i,
                        p = String;
                    (n.stroke = n.fill = "colour"),
                        (c.prototype.equal = function (a, c) {
                            return b("snap.util.equal", this, a, c).firstDefined();
                        }),
                        b.on("snap.util.equal", function (b, c) {
                            var d,
                                q,
                                r = p(this.attr(b) || ""),
                                s = this;
                            if (l(r) && l(c)) return { from: parseFloat(r), to: parseFloat(c), f: f };
                            if ("colour" == n[b]) return (d = a.color(r)), (q = a.color(c)), { from: [d.r, d.g, d.b, d.opacity], to: [q.r, q.g, q.b, q.opacity], f: i };
                            if ("viewBox" == b) return (d = this.attr(b).vb.split(" ").map(Number)), (q = c.split(" ").map(Number)), { from: d, to: q, f: h };
                            if ("transform" == b || "gradientTransform" == b || "patternTransform" == b)
                                return (
                                    c instanceof a.Matrix && (c = c.toTransformString()),
                                    a._.rgTransform.test(c) || (c = a._.svgTransform2string(c)),
                                    e(r, c, function () {
                                        return s.getBBox(1);
                                    })
                                );
                            if ("d" == b || "path" == b) return (d = a.path.toCubic(r, c)), { from: k(d[0]), to: k(d[1]), f: j(d[0]) };
                            if ("points" == b)
                                return (
                                    (d = p(r).split(a._.separator)),
                                    (q = p(c).split(a._.separator)),
                                    {
                                        from: d,
                                        to: q,
                                        f: function (a) {
                                            return a;
                                        },
                                    }
                                );
                            var t = r.match(o),
                                u = p(c).match(o);
                            return t && m(t, u) ? { from: parseFloat(r), to: parseFloat(c), f: g(t) } : { from: this.asPX(b), to: this.asPX(b, c), f: f };
                        });
                }),
                d.plugin(function (a, c, d, e) {
                    for (
                        var f = c.prototype,
                        g = "hasOwnProperty",
                        h = ("createTouch" in e.doc),
                        i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"],
                        j = { mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend" },
                        k = function (a, b) {
                            var c = "y" == a ? "scrollTop" : "scrollLeft",
                                d = b && b.node ? b.node.ownerDocument : e.doc;
                            return d[(c in d.documentElement) ? "documentElement" : "body"][c];
                        },
                        l = function () {
                            return this.originalEvent.preventDefault();
                        },
                        m = function () {
                            return this.originalEvent.stopPropagation();
                        },
                        n = function (a, b, c, d) {
                            var e = h && j[b] ? j[b] : b,
                                f = function (e) {
                                    var f = k("y", d),
                                        i = k("x", d);
                                    if (h && j[g](b))
                                        for (var n = 0, o = e.targetTouches && e.targetTouches.length; o > n; n++)
                                            if (e.targetTouches[n].target == a || a.contains(e.targetTouches[n].target)) {
                                                var p = e;
                                                (e = e.targetTouches[n]), (e.originalEvent = p), (e.preventDefault = l), (e.stopPropagation = m);
                                                break;
                                            }
                                    var q = e.clientX + i,
                                        r = e.clientY + f;
                                    return c.call(d, e, q, r);
                                };
                            return (
                                b !== e && a.addEventListener(b, f, !1),
                                a.addEventListener(e, f, !1),
                                function () {
                                    return b !== e && a.removeEventListener(b, f, !1), a.removeEventListener(e, f, !1), !0;
                                }
                            );
                        },
                        o = [],
                        p = function (a) {
                            for (var c, d = a.clientX, e = a.clientY, f = k("y"), g = k("x"), i = o.length; i--;) {
                                if (((c = o[i]), h)) {
                                    for (var j, l = a.touches && a.touches.length; l--;)
                                        if (((j = a.touches[l]), j.identifier == c.el._drag.id || c.el.node.contains(j.target))) {
                                            (d = j.clientX), (e = j.clientY), (a.originalEvent ? a.originalEvent : a).preventDefault();
                                            break;
                                        }
                                } else a.preventDefault();
                                {
                                    var m = c.el.node;
                                    m.nextSibling, m.parentNode, m.style.display;
                                }
                                (d += g), (e += f), b("snap.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a);
                            }
                        },
                        q = function (c) {
                            a.unmousemove(p).unmouseup(q);
                            for (var d, e = o.length; e--;) (d = o[e]), (d.el._drag = {}), b("snap.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c), b.off("snap.drag.*." + d.el.id);
                            o = [];
                        },
                        r = i.length;
                        r--;

                    )
                        !(function (b) {
                            (a[b] = f[b] = function (c, d) {
                                if (a.is(c, "function")) (this.events = this.events || []), this.events.push({ name: b, f: c, unbind: n(this.node || document, b, c, d || this) });
                                else
                                    for (var e = 0, f = this.events.length; f > e; e++)
                                        if (this.events[e].name == b)
                                            try {
                                                this.events[e].f.call(this);
                                            } catch (g) { }
                                return this;
                            }),
                                (a["un" + b] = f["un" + b] = function (a) {
                                    for (var c = this.events || [], d = c.length; d--;) if (c[d].name == b && (c[d].f == a || !a)) return c[d].unbind(), c.splice(d, 1), !c.length && delete this.events, this;
                                    return this;
                                });
                        })(i[r]);
                    (f.hover = function (a, b, c, d) {
                        return this.mouseover(a, c).mouseout(b, d || c);
                    }),
                        (f.unhover = function (a, b) {
                            return this.unmouseover(a).unmouseout(b);
                        });
                    var s = [];
                    (f.drag = function (c, d, e, f, g, h) {
                        function i(i, j, l) {
                            (i.originalEvent || i).preventDefault(),
                                (k._drag.x = j),
                                (k._drag.y = l),
                                (k._drag.id = i.identifier),
                                !o.length && a.mousemove(p).mouseup(q),
                                o.push({ el: k, move_scope: f, start_scope: g, end_scope: h }),
                                d && b.on("snap.drag.start." + k.id, d),
                                c && b.on("snap.drag.move." + k.id, c),
                                e && b.on("snap.drag.end." + k.id, e),
                                b("snap.drag.start." + k.id, g || f || k, j, l, i);
                        }
                        function j(a, c, d) {
                            b("snap.draginit." + k.id, k, a, c, d);
                        }
                        var k = this;
                        if (!arguments.length) {
                            var l;
                            return k.drag(
                                function (a, b) {
                                    this.attr({ transform: l + (l ? "T" : "t") + [a, b] });
                                },
                                function () {
                                    l = this.transform().local;
                                }
                            );
                        }
                        return b.on("snap.draginit." + k.id, i), (k._drag = {}), s.push({ el: k, start: i, init: j }), k.mousedown(j), k;
                    }),
                        (f.undrag = function () {
                            for (var c = s.length; c--;) s[c].el == this && (this.unmousedown(s[c].init), s.splice(c, 1), b.unbind("snap.drag.*." + this.id), b.unbind("snap.draginit." + this.id));
                            return !s.length && a.unmousemove(p).unmouseup(q), this;
                        });
                }),
                d.plugin(function (a, c, d) {
                    var e = (c.prototype, d.prototype),
                        f = /^\s*url\((.+)\)/,
                        g = String,
                        h = a._.$;
                    (a.filter = {}),
                        (e.filter = function (b) {
                            var d = this;
                            "svg" != d.type && (d = d.paper);
                            var e = a.parse(g(b)),
                                f = a._.id(),
                                i = (d.node.offsetWidth, d.node.offsetHeight, h("filter"));
                            return h(i, { id: f, filterUnits: "userSpaceOnUse" }), i.appendChild(e.node), d.defs.appendChild(i), new c(i);
                        }),
                        b.on("snap.util.getattr.filter", function () {
                            b.stop();
                            var c = h(this.node, "filter");
                            if (c) {
                                var d = g(c).match(f);
                                return d && a.select(d[1]);
                            }
                        }),
                        b.on("snap.util.attr.filter", function (d) {
                            if (d instanceof c && "filter" == d.type) {
                                b.stop();
                                var e = d.node.id;
                                e || (h(d.node, { id: d.id }), (e = d.id)), h(this.node, { filter: a.url(e) });
                            }
                            (d && "none" != d) || (b.stop(), this.node.removeAttribute("filter"));
                        }),
                        (a.filter.blur = function (b, c) {
                            null == b && (b = 2);
                            var d = null == c ? b : [b, c];
                            return a.format('<feGaussianBlur stdDeviation="{def}"/>', { def: d });
                        }),
                        (a.filter.blur.toString = function () {
                            return this();
                        }),
                        (a.filter.shadow = function (b, c, d, e, f) {
                            return (
                                "string" == typeof d && ((e = d), (f = e), (d = 4)),
                                "string" != typeof e && ((f = e), (e = "#000")),
                                (e = e || "#000"),
                                null == d && (d = 4),
                                null == f && (f = 1),
                                null == b && ((b = 0), (c = 2)),
                                null == c && (c = b),
                                (e = a.color(e)),
                                a.format(
                                    '<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>',
                                    { color: e, dx: b, dy: c, blur: d, opacity: f }
                                )
                            );
                        }),
                        (a.filter.shadow.toString = function () {
                            return this();
                        }),
                        (a.filter.grayscale = function (b) {
                            return (
                                null == b && (b = 1),
                                a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                                    a: 0.2126 + 0.7874 * (1 - b),
                                    b: 0.7152 - 0.7152 * (1 - b),
                                    c: 0.0722 - 0.0722 * (1 - b),
                                    d: 0.2126 - 0.2126 * (1 - b),
                                    e: 0.7152 + 0.2848 * (1 - b),
                                    f: 0.0722 - 0.0722 * (1 - b),
                                    g: 0.2126 - 0.2126 * (1 - b),
                                    h: 0.0722 + 0.9278 * (1 - b),
                                })
                            );
                        }),
                        (a.filter.grayscale.toString = function () {
                            return this();
                        }),
                        (a.filter.sepia = function (b) {
                            return (
                                null == b && (b = 1),
                                a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                                    a: 0.393 + 0.607 * (1 - b),
                                    b: 0.769 - 0.769 * (1 - b),
                                    c: 0.189 - 0.189 * (1 - b),
                                    d: 0.349 - 0.349 * (1 - b),
                                    e: 0.686 + 0.314 * (1 - b),
                                    f: 0.168 - 0.168 * (1 - b),
                                    g: 0.272 - 0.272 * (1 - b),
                                    h: 0.534 - 0.534 * (1 - b),
                                    i: 0.131 + 0.869 * (1 - b),
                                })
                            );
                        }),
                        (a.filter.sepia.toString = function () {
                            return this();
                        }),
                        (a.filter.saturate = function (b) {
                            return null == b && (b = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', { amount: 1 - b });
                        }),
                        (a.filter.saturate.toString = function () {
                            return this();
                        }),
                        (a.filter.hueRotate = function (b) {
                            return (b = b || 0), a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', { angle: b });
                        }),
                        (a.filter.hueRotate.toString = function () {
                            return this();
                        }),
                        (a.filter.invert = function (b) {
                            return (
                                null == b && (b = 1),
                                a.format(
                                    '<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>',
                                    { amount: b, amount2: 1 - b }
                                )
                            );
                        }),
                        (a.filter.invert.toString = function () {
                            return this();
                        }),
                        (a.filter.brightness = function (b) {
                            return (
                                null == b && (b = 1),
                                a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', { amount: b })
                            );
                        }),
                        (a.filter.brightness.toString = function () {
                            return this();
                        }),
                        (a.filter.contrast = function (b) {
                            return (
                                null == b && (b = 1),
                                a.format(
                                    '<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>',
                                    { amount: b, amount2: 0.5 - b / 2 }
                                )
                            );
                        }),
                        (a.filter.contrast.toString = function () {
                            return this();
                        });
                }),
                d.plugin(function (a, b) {
                    var c = a._.box,
                        d = a.is,
                        e = /^[^a-z]*([tbmlrc])/i,
                        f = function () {
                            return "T" + this.dx + "," + this.dy;
                        };
                    (b.prototype.getAlign = function (a, b) {
                        null == b && d(a, "string") && ((b = a), (a = null)), (a = a || this.paper);
                        var g = a.getBBox ? a.getBBox() : c(a),
                            h = this.getBBox(),
                            i = {};
                        switch (((b = b && b.match(e)), (b = b ? b[1].toLowerCase() : "c"))) {
                            case "t":
                                (i.dx = 0), (i.dy = g.y - h.y);
                                break;
                            case "b":
                                (i.dx = 0), (i.dy = g.y2 - h.y2);
                                break;
                            case "m":
                                (i.dx = 0), (i.dy = g.cy - h.cy);
                                break;
                            case "l":
                                (i.dx = g.x - h.x), (i.dy = 0);
                                break;
                            case "r":
                                (i.dx = g.x2 - h.x2), (i.dy = 0);
                                break;
                            default:
                                (i.dx = g.cx - h.cx), (i.dy = 0);
                        }
                        return (i.toString = f), i;
                    }),
                        (b.prototype.align = function (a, b) {
                            return this.transform("..." + this.getAlign(a, b));
                        });
                }),
                d
            );
        });

    /**
     * Owl Carousel v2.2.1
     * Copyright 2013-2017 David Deutsch
     * Licensed under  ()
     */
    !(function (a, b, c, d) {
        function e(b, c) {
            (this.settings = null),
                (this.options = a.extend({}, e.Defaults, c)),
                (this.$element = a(b)),
                (this._handlers = {}),
                (this._plugins = {}),
                (this._supress = {}),
                (this._current = null),
                (this._speed = null),
                (this._coordinates = []),
                (this._breakpoint = null),
                (this._width = null),
                (this._items = []),
                (this._clones = []),
                (this._mergers = []),
                (this._widths = []),
                (this._invalidated = {}),
                (this._pipe = []),
                (this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }),
                (this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }),
                a.each(
                    ["onResize", "onThrottledResize"],
                    a.proxy(function (b, c) {
                        this._handlers[c] = a.proxy(this[c], this);
                    }, this)
                ),
                a.each(
                    e.Plugins,
                    a.proxy(function (a, b) {
                        this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
                    }, this)
                ),
                a.each(
                    e.Workers,
                    a.proxy(function (b, c) {
                        this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
                    }, this)
                ),
                this.setup(),
                this.initialize();
        }
        (e.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: b,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab",
        }),
            (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
            (e.Type = { Event: "event", State: "state" }),
            (e.Plugins = {}),
            (e.Workers = [
                {
                    filter: ["width", "settings"],
                    run: function () {
                        this._width = this.$element.width();
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (a) {
                        a.current = this._items && this._items[this.relative(this._current)];
                    },
                },
                {
                    filter: ["items", "settings"],
                    run: function () {
                        this.$stage.children(".cloned").remove();
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (a) {
                        var b = this.settings.margin || "",
                            c = !this.settings.autoWidth,
                            d = this.settings.rtl,
                            e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };
                        !c && this.$stage.children().css(e), (a.css = e);
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (a) {
                        var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                            c = null,
                            d = this._items.length,
                            e = !this.settings.autoWidth,
                            f = [];
                        for (a.items = { merge: !1, width: b }; d--;)
                            (c = this._mergers[d]), (c = (this.settings.mergeFit && Math.min(c, this.settings.items)) || c), (a.items.merge = c > 1 || a.items.merge), (f[d] = e ? b * c : this._items[d].width());
                        this._widths = f;
                    },
                },
                {
                    filter: ["items", "settings"],
                    run: function () {
                        var b = [],
                            c = this._items,
                            d = this.settings,
                            e = Math.max(2 * d.items, 4),
                            f = 2 * Math.ceil(c.length / 2),
                            g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
                            h = "",
                            i = "";
                        for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), (h += c[b[b.length - 1]][0].outerHTML), b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), (i = c[b[b.length - 1]][0].outerHTML + i);
                        (this._clones = b), a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function () {
                        for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;)
                            (d = f[c - 1] || 0), (e = this._widths[this.relative(c)] + this.settings.margin), f.push(d + e * a);
                        this._coordinates = f;
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function () {
                        var a = this.settings.stagePadding,
                            b = this._coordinates,
                            c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };
                        this.$stage.css(c);
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (a) {
                        var b = this._coordinates.length,
                            c = !this.settings.autoWidth,
                            d = this.$stage.children();
                        if (c && a.items.merge) for (; b--;) (a.css.width = this._widths[this.relative(b)]), d.eq(b).css(a.css);
                        else c && ((a.css.width = a.items.width), d.css(a.css));
                    },
                },
                {
                    filter: ["items"],
                    run: function () {
                        this._coordinates.length < 1 && this.$stage.removeAttr("style");
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (a) {
                        (a.current = a.current ? this.$stage.children().index(a.current) : 0), (a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current))), this.reset(a.current);
                    },
                },
                {
                    filter: ["position"],
                    run: function () {
                        this.animate(this.coordinates(this._current));
                    },
                },
                {
                    filter: ["width", "position", "items", "settings"],
                    run: function () {
                        var a,
                            b,
                            c,
                            d,
                            e = this.settings.rtl ? 1 : -1,
                            f = 2 * this.settings.stagePadding,
                            g = this.coordinates(this.current()) + f,
                            h = g + this.width() * e,
                            i = [];
                        for (c = 0, d = this._coordinates.length; c < d; c++)
                            (a = this._coordinates[c - 1] || 0), (b = Math.abs(this._coordinates[c]) + f * e), ((this.op(a, "<=", g) && this.op(a, ">", h)) || (this.op(b, "<", g) && this.op(b, ">", h))) && i.push(c);
                        this.$stage.children(".active").removeClass("active"),
                            this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
                            this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"));
                    },
                },
            ]),
            (e.prototype.initialize = function () {
                if ((this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading"))) {
                    var b, c, e;
                    (b = this.$element.find("img")), (c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d), (e = this.$element.children(c).width()), b.length && e <= 0 && this.preloadAutoWidthImages(b);
                }
                this.$element.addClass(this.options.loadingClass),
                    (this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
                    this.$element.append(this.$stage.parent()),
                    this.replace(this.$element.children().not(this.$stage.parent())),
                    this.$element.is(":visible") ? this.refresh() : this.invalidate("width"),
                    this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),
                    this.registerEventHandlers(),
                    this.leave("initializing"),
                    this.trigger("initialized");
            }),
            (e.prototype.setup = function () {
                var b = this.viewport(),
                    c = this.options.responsive,
                    d = -1,
                    e = null;
                c
                    ? (a.each(c, function (a) {
                        a <= b && a > d && (d = Number(a));
                    }),
                        (e = a.extend({}, this.options, c[d])),
                        "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
                        delete e.responsive,
                        e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d)))
                    : (e = a.extend({}, this.options)),
                    this.trigger("change", { property: { name: "settings", value: e } }),
                    (this._breakpoint = d),
                    (this.settings = e),
                    this.invalidate("settings"),
                    this.trigger("changed", { property: { name: "settings", value: this.settings } });
            }),
            (e.prototype.optionsLogic = function () {
                this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
            }),
            (e.prototype.prepare = function (b) {
                var c = this.trigger("prepare", { content: b });
                return (
                    c.data ||
                    (c.data = a("<" + this.settings.itemElement + "/>")
                        .addClass(this.options.itemClass)
                        .append(b)),
                    this.trigger("prepared", { content: c.data }),
                    c.data
                );
            }),
            (e.prototype.update = function () {
                for (
                    var b = 0,
                    c = this._pipe.length,
                    d = a.proxy(function (a) {
                        return this[a];
                    }, this._invalidated),
                    e = {};
                    b < c;

                )
                    (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
                (this._invalidated = {}), !this.is("valid") && this.enter("valid");
            }),
            (e.prototype.width = function (a) {
                switch ((a = a || e.Width.Default)) {
                    case e.Width.Inner:
                    case e.Width.Outer:
                        return this._width;
                    default:
                        return this._width - 2 * this.settings.stagePadding + this.settings.margin;
                }
            }),
            (e.prototype.refresh = function () {
                this.enter("refreshing"),
                    this.trigger("refresh"),
                    this.setup(),
                    this.optionsLogic(),
                    this.$element.addClass(this.options.refreshClass),
                    this.update(),
                    this.$element.removeClass(this.options.refreshClass),
                    this.leave("refreshing"),
                    this.trigger("refreshed");
            }),
            (e.prototype.onThrottledResize = function () {
                b.clearTimeout(this.resizeTimer), (this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
            }),
            (e.prototype.onResize = function () {
                return (
                    !!this._items.length &&
                    this._width !== this.$element.width() &&
                    !!this.$element.is(":visible") &&
                    (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
                );
            }),
            (e.prototype.registerEventHandlers = function () {
                a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)),
                    this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize),
                    this.settings.mouseDrag &&
                    (this.$element.addClass(this.options.dragClass),
                        this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
                        this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                            return !1;
                        })),
                    this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
            }),
            (e.prototype.onDragStart = function (b) {
                var d = null;
                3 !== b.which &&
                    (a.support.transform
                        ? ((d = this.$stage
                            .css("transform")
                            .replace(/.*\(|\)| /g, "")
                            .split(",")),
                            (d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }))
                        : ((d = this.$stage.position()), (d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top })),
                        this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")),
                        this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
                        this.speed(0),
                        (this._drag.time = new Date().getTime()),
                        (this._drag.target = a(b.target)),
                        (this._drag.stage.start = d),
                        (this._drag.stage.current = d),
                        (this._drag.pointer = this.pointer(b)),
                        a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
                        a(c).one(
                            "mousemove.owl.core touchmove.owl.core",
                            a.proxy(function (b) {
                                var d = this.difference(this._drag.pointer, this.pointer(b));
                                a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
                            }, this)
                        ));
            }),
            (e.prototype.onDragMove = function (a) {
                var b = null,
                    c = null,
                    d = null,
                    e = this.difference(this._drag.pointer, this.pointer(a)),
                    f = this.difference(this._drag.stage.start, e);
                this.is("dragging") &&
                    (a.preventDefault(),
                        this.settings.loop
                            ? ((b = this.coordinates(this.minimum())), (c = this.coordinates(this.maximum() + 1) - b), (f.x = ((((f.x - b) % c) + c) % c) + b))
                            : ((b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
                                (c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
                                (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
                                (f.x = Math.max(Math.min(f.x, b + d), c + d))),
                        (this._drag.stage.current = f),
                        this.animate(f.x));
            }),
            (e.prototype.onDragEnd = function (b) {
                var d = this.difference(this._drag.pointer, this.pointer(b)),
                    e = this._drag.stage.current,
                    f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
                a(c).off(".owl.core"),
                    this.$element.removeClass(this.options.grabClass),
                    ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
                    (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                        this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
                        this.invalidate("position"),
                        this.update(),
                        (this._drag.direction = f),
                        (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
                        this._drag.target.one("click.owl.core", function () {
                            return !1;
                        })),
                    this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
            }),
            (e.prototype.closest = function (b, c) {
                var d = -1,
                    e = 30,
                    f = this.width(),
                    g = this.coordinates();
                return (
                    this.settings.freeDrag ||
                    a.each(
                        g,
                        a.proxy(function (a, h) {
                            return (
                                "left" === c && b > h - e && b < h + e
                                    ? (d = a)
                                    : "right" === c && b > h - f - e && b < h - f + e
                                        ? (d = a + 1)
                                        : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a),
                                d === -1
                            );
                        }, this)
                    ),
                    this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? (d = b = this.minimum()) : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())),
                    d
                );
            }),
            (e.prototype.animate = function (b) {
                var c = this.speed() > 0;
                this.is("animating") && this.onTransitionEnd(),
                    c && (this.enter("animating"), this.trigger("translate")),
                    a.support.transform3d && a.support.transition
                        ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" })
                        : c
                            ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this))
                            : this.$stage.css({ left: b + "px" });
            }),
            (e.prototype.is = function (a) {
                return this._states.current[a] && this._states.current[a] > 0;
            }),
            (e.prototype.current = function (a) {
                if (a === d) return this._current;
                if (0 === this._items.length) return d;
                if (((a = this.normalize(a)), this._current !== a)) {
                    var b = this.trigger("change", { property: { name: "position", value: a } });
                    b.data !== d && (a = this.normalize(b.data)), (this._current = a), this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
                }
                return this._current;
            }),
            (e.prototype.invalidate = function (b) {
                return (
                    "string" === a.type(b) && ((this._invalidated[b] = !0), this.is("valid") && this.leave("valid")),
                    a.map(this._invalidated, function (a, b) {
                        return b;
                    })
                );
            }),
            (e.prototype.reset = function (a) {
                (a = this.normalize(a)), a !== d && ((this._speed = 0), (this._current = a), this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
            }),
            (e.prototype.normalize = function (a, b) {
                var c = this._items.length,
                    e = b ? 0 : this._clones.length;
                return !this.isNumeric(a) || c < 1 ? (a = d) : (a < 0 || a >= c + e) && (a = ((((a - e / 2) % c) + c) % c) + e / 2), a;
            }),
            (e.prototype.relative = function (a) {
                return (a -= this._clones.length / 2), this.normalize(a, !0);
            }),
            (e.prototype.maximum = function (a) {
                var b,
                    c,
                    d,
                    e = this.settings,
                    f = this._coordinates.length;
                if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
                else if (e.autoWidth || e.merge) {
                    for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && ((c += this._items[b].width() + this.settings.margin), !(c > d)););
                    f = b + 1;
                } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
                return a && (f -= this._clones.length / 2), Math.max(f, 0);
            }),
            (e.prototype.minimum = function (a) {
                return a ? 0 : this._clones.length / 2;
            }),
            (e.prototype.items = function (a) {
                return a === d ? this._items.slice() : ((a = this.normalize(a, !0)), this._items[a]);
            }),
            (e.prototype.mergers = function (a) {
                return a === d ? this._mergers.slice() : ((a = this.normalize(a, !0)), this._mergers[a]);
            }),
            (e.prototype.clones = function (b) {
                var c = this._clones.length / 2,
                    e = c + this._items.length,
                    f = function (a) {
                        return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
                    };
                return b === d
                    ? a.map(this._clones, function (a, b) {
                        return f(b);
                    })
                    : a.map(this._clones, function (a, c) {
                        return a === b ? f(c) : null;
                    });
            }),
            (e.prototype.speed = function (a) {
                return a !== d && (this._speed = a), this._speed;
            }),
            (e.prototype.coordinates = function (b) {
                var c,
                    e = 1,
                    f = b - 1;
                return b === d
                    ? a.map(
                        this._coordinates,
                        a.proxy(function (a, b) {
                            return this.coordinates(b);
                        }, this)
                    )
                    : (this.settings.center ? (this.settings.rtl && ((e = -1), (f = b + 1)), (c = this._coordinates[b]), (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e)) : (c = this._coordinates[f] || 0),
                        (c = Math.ceil(c)));
            }),
            (e.prototype.duration = function (a, b, c) {
                return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
            }),
            (e.prototype.to = function (a, b) {
                var c = this.current(),
                    d = null,
                    e = a - this.relative(c),
                    f = (e > 0) - (e < 0),
                    g = this._items.length,
                    h = this.minimum(),
                    i = this.maximum();
                this.settings.loop
                    ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), (a = c + e), (d = ((((a - h) % g) + g) % g) + h), d !== a && d - e <= i && d - e > 0 && ((c = d - e), (a = d), this.reset(c)))
                    : this.settings.rewind
                        ? ((i += 1), (a = ((a % i) + i) % i))
                        : (a = Math.max(h, Math.min(i, a))),
                    this.speed(this.duration(c, a, b)),
                    this.current(a),
                    this.$element.is(":visible") && this.update();
            }),
            (e.prototype.next = function (a) {
                (a = a || !1), this.to(this.relative(this.current()) + 1, a);
            }),
            (e.prototype.prev = function (a) {
                (a = a || !1), this.to(this.relative(this.current()) - 1, a);
            }),
            (e.prototype.onTransitionEnd = function (a) {
                if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
                this.leave("animating"), this.trigger("translated");
            }),
            (e.prototype.viewport = function () {
                var d;
                return (
                    this.options.responsiveBaseElement !== b
                        ? (d = a(this.options.responsiveBaseElement).width())
                        : b.innerWidth
                            ? (d = b.innerWidth)
                            : c.documentElement && c.documentElement.clientWidth
                                ? (d = c.documentElement.clientWidth)
                                : console.warn("Can not detect viewport width."),
                    d
                );
            }),
            (e.prototype.replace = function (b) {
                this.$stage.empty(),
                    (this._items = []),
                    b && (b = b instanceof jQuery ? b : a(b)),
                    this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
                    b
                        .filter(function () {
                            return 1 === this.nodeType;
                        })
                        .each(
                            a.proxy(function (a, b) {
                                (b = this.prepare(b)), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
                            }, this)
                        ),
                    this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                    this.invalidate("items");
            }),
            (e.prototype.add = function (b, c) {
                var e = this.relative(this._current);
                (c = c === d ? this._items.length : this.normalize(c, !0)),
                    (b = b instanceof jQuery ? b : a(b)),
                    this.trigger("add", { content: b, position: c }),
                    (b = this.prepare(b)),
                    0 === this._items.length || c === this._items.length
                        ? (0 === this._items.length && this.$stage.append(b),
                            0 !== this._items.length && this._items[c - 1].after(b),
                            this._items.push(b),
                            this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1))
                        : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
                    this._items[e] && this.reset(this._items[e].index()),
                    this.invalidate("items"),
                    this.trigger("added", { content: b, position: c });
            }),
            (e.prototype.remove = function (a) {
                (a = this.normalize(a, !0)),
                    a !== d &&
                    (this.trigger("remove", { content: this._items[a], position: a }),
                        this._items[a].remove(),
                        this._items.splice(a, 1),
                        this._mergers.splice(a, 1),
                        this.invalidate("items"),
                        this.trigger("removed", { content: null, position: a }));
            }),
            (e.prototype.preloadAutoWidthImages = function (b) {
                b.each(
                    a.proxy(function (b, c) {
                        this.enter("pre-loading"),
                            (c = a(c)),
                            a(new Image())
                                .one(
                                    "load",
                                    a.proxy(function (a) {
                                        c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
                                    }, this)
                                )
                                .attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
                    }, this)
                );
            }),
            (e.prototype.destroy = function () {
                this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
                for (var d in this._plugins) this._plugins[d].destroy();
                this.$stage.children(".cloned").remove(),
                    this.$stage.unwrap(),
                    this.$stage.children().contents().unwrap(),
                    this.$stage.children().unwrap(),
                    this.$element
                        .removeClass(this.options.refreshClass)
                        .removeClass(this.options.loadingClass)
                        .removeClass(this.options.loadedClass)
                        .removeClass(this.options.rtlClass)
                        .removeClass(this.options.dragClass)
                        .removeClass(this.options.grabClass)
                        .attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), ""))
                        .removeData("owl.carousel");
            }),
            (e.prototype.op = function (a, b, c) {
                var d = this.settings.rtl;
                switch (b) {
                    case "<":
                        return d ? a > c : a < c;
                    case ">":
                        return d ? a < c : a > c;
                    case ">=":
                        return d ? a <= c : a >= c;
                    case "<=":
                        return d ? a >= c : a <= c;
                }
            }),
            (e.prototype.on = function (a, b, c, d) {
                a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
            }),
            (e.prototype.off = function (a, b, c, d) {
                a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
            }),
            (e.prototype.trigger = function (b, c, d, f, g) {
                var h = { item: { count: this._items.length, index: this.current() } },
                    i = a.camelCase(
                        a
                            .grep(["on", b, d], function (a) {
                                return a;
                            })
                            .join("-")
                            .toLowerCase()
                    ),
                    j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c));
                return (
                    this._supress[b] ||
                    (a.each(this._plugins, function (a, b) {
                        b.onTrigger && b.onTrigger(j);
                    }),
                        this.register({ type: e.Type.Event, name: b }),
                        this.$element.trigger(j),
                        this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
                    j
                );
            }),
            (e.prototype.enter = function (b) {
                a.each(
                    [b].concat(this._states.tags[b] || []),
                    a.proxy(function (a, b) {
                        this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
                    }, this)
                );
            }),
            (e.prototype.leave = function (b) {
                a.each(
                    [b].concat(this._states.tags[b] || []),
                    a.proxy(function (a, b) {
                        this._states.current[b]--;
                    }, this)
                );
            }),
            (e.prototype.register = function (b) {
                if (b.type === e.Type.Event) {
                    if ((a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl)) {
                        var c = a.event.special[b.name]._default;
                        (a.event.special[b.name]._default = function (a) {
                            return !c || !c.apply || (a.namespace && a.namespace.indexOf("owl") !== -1) ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
                        }),
                            (a.event.special[b.name].owl = !0);
                    }
                } else
                    b.type === e.Type.State &&
                        (this._states.tags[b.name] ? (this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags)) : (this._states.tags[b.name] = b.tags),
                            (this._states.tags[b.name] = a.grep(
                                this._states.tags[b.name],
                                a.proxy(function (c, d) {
                                    return a.inArray(c, this._states.tags[b.name]) === d;
                                }, this)
                            )));
            }),
            (e.prototype.suppress = function (b) {
                a.each(
                    b,
                    a.proxy(function (a, b) {
                        this._supress[b] = !0;
                    }, this)
                );
            }),
            (e.prototype.release = function (b) {
                a.each(
                    b,
                    a.proxy(function (a, b) {
                        delete this._supress[b];
                    }, this)
                );
            }),
            (e.prototype.pointer = function (a) {
                var c = { x: null, y: null };
                return (
                    (a = a.originalEvent || a || b.event),
                    (a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a),
                    a.pageX ? ((c.x = a.pageX), (c.y = a.pageY)) : ((c.x = a.clientX), (c.y = a.clientY)),
                    c
                );
            }),
            (e.prototype.isNumeric = function (a) {
                return !isNaN(parseFloat(a));
            }),
            (e.prototype.difference = function (a, b) {
                return { x: a.x - b.x, y: a.y - b.y };
            }),
            (a.fn.owlCarousel = function (b) {
                var c = Array.prototype.slice.call(arguments, 1);
                return this.each(function () {
                    var d = a(this),
                        f = d.data("owl.carousel");
                    f ||
                        ((f = new e(this, "object" == typeof b && b)),
                            d.data("owl.carousel", f),
                            a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                                f.register({ type: e.Type.Event, name: c }),
                                    f.$element.on(
                                        c + ".owl.carousel.core",
                                        a.proxy(function (a) {
                                            a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
                                        }, f)
                                    );
                            })),
                        "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
                });
            }),
            (a.fn.owlCarousel.Constructor = e);
    })(window.Zepto || window.jQuery, window, document),
        (function (a, b, c, d) {
            var e = function (b) {
                (this._core = b),
                    (this._interval = null),
                    (this._visible = null),
                    (this._handlers = {
                        "initialized.owl.carousel": a.proxy(function (a) {
                            a.namespace && this._core.settings.autoRefresh && this.watch();
                        }, this),
                    }),
                    (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                    this._core.$element.on(this._handlers);
            };
            (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
                (e.prototype.watch = function () {
                    this._interval || ((this._visible = this._core.$element.is(":visible")), (this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
                }),
                (e.prototype.refresh = function () {
                    this._core.$element.is(":visible") !== this._visible &&
                        ((this._visible = !this._visible), this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
                }),
                (e.prototype.destroy = function () {
                    var a, c;
                    b.clearInterval(this._interval);
                    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                    for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
                }),
                (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
        })(window.Zepto || window.jQuery, window, document),
        (function (a, b, c, d) {
            var e = function (b) {
                (this._core = b),
                    (this._loaded = []),
                    (this._handlers = {
                        "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                            if (b.namespace && this._core.settings && this._core.settings.lazyLoad && ((b.property && "position" == b.property.name) || "initialized" == b.type))
                                for (
                                    var c = this._core.settings,
                                    e = (c.center && Math.ceil(c.items / 2)) || c.items,
                                    f = (c.center && e * -1) || 0,
                                    g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
                                    h = this._core.clones().length,
                                    i = a.proxy(function (a, b) {
                                        this.load(b);
                                    }, this);
                                    f++ < e;

                                )
                                    this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
                        }, this),
                    }),
                    (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                    this._core.$element.on(this._handlers);
            };
            (e.Defaults = { lazyLoad: !1 }),
                (e.prototype.load = function (c) {
                    var d = this._core.$stage.children().eq(c),
                        e = d && d.find(".owl-lazy");
                    !e ||
                        a.inArray(d.get(0), this._loaded) > -1 ||
                        (e.each(
                            a.proxy(function (c, d) {
                                var e,
                                    f = a(d),
                                    g = (b.devicePixelRatio > 1 && f.attr("data-src-retina")) || f.attr("data-src");
                                this._core.trigger("load", { element: f, url: g }, "lazy"),
                                    f.is("img")
                                        ? f
                                            .one(
                                                "load.owl.lazy",
                                                a.proxy(function () {
                                                    f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                                }, this)
                                            )
                                            .attr("src", g)
                                        : ((e = new Image()),
                                            (e.onload = a.proxy(function () {
                                                f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                            }, this)),
                                            (e.src = g));
                            }, this)
                        ),
                            this._loaded.push(d.get(0)));
                }),
                (e.prototype.destroy = function () {
                    var a, b;
                    for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
                    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
                }),
                (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
        })(window.Zepto || window.jQuery, window, document),
        (function (a, b, c, d) {
            var e = function (b) {
                (this._core = b),
                    (this._handlers = {
                        "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                            a.namespace && this._core.settings.autoHeight && this.update();
                        }, this),
                        "changed.owl.carousel": a.proxy(function (a) {
                            a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update();
                        }, this),
                        "loaded.owl.lazy": a.proxy(function (a) {
                            a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
                        }, this),
                    }),
                    (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                    this._core.$element.on(this._handlers);
            };
            (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
                (e.prototype.update = function () {
                    var b = this._core._current,
                        c = b + this._core.settings.items,
                        d = this._core.$stage.children().toArray().slice(b, c),
                        e = [],
                        f = 0;
                    a.each(d, function (b, c) {
                        e.push(a(c).height());
                    }),
                        (f = Math.max.apply(null, e)),
                        this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass);
                }),
                (e.prototype.destroy = function () {
                    var a, b;
                    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
                }),
                (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
        })(window.Zepto || window.jQuery, window, document),
        (function (a, b, c, d) {
            var e = function (b) {
                (this._core = b),
                    (this._videos = {}),
                    (this._playing = null),
                    (this._handlers = {
                        "initialized.owl.carousel": a.proxy(function (a) {
                            a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
                        }, this),
                        "resize.owl.carousel": a.proxy(function (a) {
                            a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
                        }, this),
                        "refreshed.owl.carousel": a.proxy(function (a) {
                            a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
                        }, this),
                        "changed.owl.carousel": a.proxy(function (a) {
                            a.namespace && "position" === a.property.name && this._playing && this.stop();
                        }, this),
                        "prepared.owl.carousel": a.proxy(function (b) {
                            if (b.namespace) {
                                var c = a(b.content).find(".owl-video");
                                c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
                            }
                        }, this),
                    }),
                    (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                    this._core.$element.on(this._handlers),
                    this._core.$element.on(
                        "click.owl.video",
                        ".owl-video-play-icon",
                        a.proxy(function (a) {
                            this.play(a);
                        }, this)
                    );
            };
            (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
                (e.prototype.fetch = function (a, b) {
                    var c = (function () {
                        return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
                    })(),
                        d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
                        e = a.attr("data-width") || this._core.settings.videoWidth,
                        f = a.attr("data-height") || this._core.settings.videoHeight,
                        g = a.attr("href");
                    if (!g) throw new Error("Missing video URL.");
                    if (
                        ((d = g.match(
                            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                        )),
                            d[3].indexOf("youtu") > -1)
                    )
                        c = "youtube";
                    else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
                    else {
                        if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                        c = "vzaar";
                    }
                    (d = d[6]), (this._videos[g] = { type: c, id: d, width: e, height: f }), b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
                }),
                (e.prototype.thumbnail = function (b, c) {
                    var d,
                        e,
                        f,
                        g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
                        h = b.find("img"),
                        i = "src",
                        j = "",
                        k = this._core.settings,
                        l = function (a) {
                            (e = '<div class="owl-video-play-icon"></div>'),
                                (d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>'),
                                b.after(d),
                                b.after(e);
                        };
                    if ((b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")), h.length)) return l(h.attr(i)), h.remove(), !1;
                    "youtube" === c.type
                        ? ((f = "//web.archive.org/web/20180224113204/https://img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
                        : "vimeo" === c.type
                            ? a.ajax({
                                type: "GET",
                                url: "//web.archive.org/web/20180224113204/https://vimeo.com/api/v2/video/" + c.id + ".json",
                                jsonp: "callback",
                                dataType: "jsonp",
                                success: function (a) {
                                    (f = a[0].thumbnail_large), l(f);
                                },
                            })
                            : "vzaar" === c.type &&
                            a.ajax({
                                type: "GET",
                                url: "//web.archive.org/web/20180224113204/https://vzaar.com/api/videos/" + c.id + ".json",
                                jsonp: "callback",
                                dataType: "jsonp",
                                success: function (a) {
                                    (f = a.framegrab_url), l(f);
                                },
                            });
                }),
                (e.prototype.stop = function () {
                    this._core.trigger("stop", null, "video"),
                        this._playing.find(".owl-video-frame").remove(),
                        this._playing.removeClass("owl-video-playing"),
                        (this._playing = null),
                        this._core.leave("playing"),
                        this._core.trigger("stopped", null, "video");
                }),
                (e.prototype.play = function (b) {
                    var c,
                        d = a(b.target),
                        e = d.closest("." + this._core.settings.itemClass),
                        f = this._videos[e.attr("data-video")],
                        g = f.width || "100%",
                        h = f.height || this._core.$stage.height();
                    this._playing ||
                        (this._core.enter("playing"),
                            this._core.trigger("play", null, "video"),
                            (e = this._core.items(this._core.relative(e.index()))),
                            this._core.reset(e.index()),
                            "youtube" === f.type
                                ? (c =
                                    '<iframe width="' +
                                    g +
                                    '" height="' +
                                    h +
                                    '" src="//web.archive.org/web/20180224113204/https://www.youtube.com/embed/' +
                                    f.id +
                                    "?autoplay=1&rel=0&v=" +
                                    f.id +
                                    '" frameborder="0" allowfullscreen></iframe>')
                                : "vimeo" === f.type
                                    ? (c =
                                        '<iframe src="//web.archive.org/web/20180224113204/https://player.vimeo.com/video/' +
                                        f.id +
                                        '?autoplay=1" width="' +
                                        g +
                                        '" height="' +
                                        h +
                                        '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
                                    : "vzaar" === f.type &&
                                    (c =
                                        '<iframe frameborder="0"height="' +
                                        h +
                                        '"width="' +
                                        g +
                                        '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//web.archive.org/web/20180224113204/https://view.vzaar.com/' +
                                        f.id +
                                        '/player?autoplay=true"></iframe>'),
                            a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")),
                            (this._playing = e.addClass("owl-video-playing")));
                }),
                (e.prototype.isInFullScreen = function () {
                    var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
                    return b && a(b).parent().hasClass("owl-video-frame");
                }),
                (e.prototype.destroy = function () {
                    var a, b;
                    this._core.$element.off("click.owl.video");
                    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
                }),
                (a.fn.owlCarousel.Constructor.Plugins.Video = e);
        })(window.Zepto || window.jQuery, window, document),
        (function (a, b, c, d) {
            var e = function (b) {
                (this.core = b),
                    (this.core.options = a.extend({}, e.Defaults, this.core.options)),
                    (this.swapping = !0),
                    (this.previous = d),
                    (this.next = d),
                    (this.handlers = {
                        "change.owl.carousel": a.proxy(function (a) {
                            a.namespace && "position" == a.property.name && ((this.previous = this.core.current()), (this.next = a.property.value));
                        }, this),
                        "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                            a.namespace && (this.swapping = "translated" == a.type);
                        }, this),
                        "translate.owl.carousel": a.proxy(function (a) {
                            a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
                        }, this),
                    }),
                    this.core.$element.on(this.handlers);
            };
            (e.Defaults = { animateOut: !1, animateIn: !1 }),
                (e.prototype.swap = function () {
                    if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                        this.core.speed(0);
                        var b,
                            c = a.proxy(this.clear, this),
                            d = this.core.$stage.children().eq(this.previous),
                            e = this.core.$stage.children().eq(this.next),
                            f = this.core.settings.animateIn,
                            g = this.core.settings.animateOut;
                        this.core.current() !== this.previous &&
                            (g &&
                                ((b = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
                                    d
                                        .one(a.support.animation.end, c)
                                        .css({ left: b + "px" })
                                        .addClass("animated owl-animated-out")
                                        .addClass(g)),
                                f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
                    }
                }),
                (e.prototype.clear = function (b) {
                    a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
                }),
                (e.prototype.destroy = function () {
                    var a, b;
                    for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
                    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
                }),
                (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
        })(window.Zepto || window.jQuery, window, document),
        (function (a, b, c, d) {
            var e = function (b) {
                (this._core = b),
                    (this._timeout = null),
                    (this._paused = !1),
                    (this._handlers = {
                        "changed.owl.carousel": a.proxy(function (a) {
                            a.namespace && "settings" === a.property.name
                                ? this._core.settings.autoplay
                                    ? this.play()
                                    : this.stop()
                                : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval();
                        }, this),
                        "initialized.owl.carousel": a.proxy(function (a) {
                            a.namespace && this._core.settings.autoplay && this.play();
                        }, this),
                        "play.owl.autoplay": a.proxy(function (a, b, c) {
                            a.namespace && this.play(b, c);
                        }, this),
                        "stop.owl.autoplay": a.proxy(function (a) {
                            a.namespace && this.stop();
                        }, this),
                        "mouseover.owl.autoplay": a.proxy(function () {
                            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                        }, this),
                        "mouseleave.owl.autoplay": a.proxy(function () {
                            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
                        }, this),
                        "touchstart.owl.core": a.proxy(function () {
                            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                        }, this),
                        "touchend.owl.core": a.proxy(function () {
                            this._core.settings.autoplayHoverPause && this.play();
                        }, this),
                    }),
                    this._core.$element.on(this._handlers),
                    (this._core.options = a.extend({}, e.Defaults, this._core.options));
            };
            (e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
                (e.prototype.play = function (a, b) {
                    (this._paused = !1), this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval());
                }),
                (e.prototype._getNextTimeout = function (d, e) {
                    return (
                        this._timeout && b.clearTimeout(this._timeout),
                        b.setTimeout(
                            a.proxy(function () {
                                this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed);
                            }, this),
                            d || this._core.settings.autoplayTimeout
                        )
                    );
                }),
                (e.prototype._setAutoPlayInterval = function () {
                    this._timeout = this._getNextTimeout();
                }),
                (e.prototype.stop = function () {
                    this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"));
                }),
                (e.prototype.pause = function () {
                    this._core.is("rotating") && (this._paused = !0);
                }),
                (e.prototype.destroy = function () {
                    var a, b;
                    this.stop();
                    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
                }),
                (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
        })(window.Zepto || window.jQuery, window, document),
        (function (a, b, c, d) {
            "use strict";
            var e = function (b) {
                (this._core = b),
                    (this._initialized = !1),
                    (this._pages = []),
                    (this._controls = {}),
                    (this._templates = []),
                    (this.$element = this._core.$element),
                    (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
                    (this._handlers = {
                        "prepared.owl.carousel": a.proxy(function (b) {
                            b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
                        }, this),
                        "added.owl.carousel": a.proxy(function (a) {
                            a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
                        }, this),
                        "remove.owl.carousel": a.proxy(function (a) {
                            a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
                        }, this),
                        "changed.owl.carousel": a.proxy(function (a) {
                            a.namespace && "position" == a.property.name && this.draw();
                        }, this),
                        "initialized.owl.carousel": a.proxy(function (a) {
                            a.namespace &&
                                !this._initialized &&
                                (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), (this._initialized = !0), this._core.trigger("initialized", null, "navigation"));
                        }, this),
                        "refreshed.owl.carousel": a.proxy(function (a) {
                            a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
                        }, this),
                    }),
                    (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                    this.$element.on(this._handlers);
            };
            (e.Defaults = {
                nav: !1,
                navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
                navSpeed: !1,
                navElement: "div",
                navContainer: !1,
                navContainerClass: "owl-nav",
                navClass: ["owl-prev", "owl-next"],
                slideBy: 1,
                dotClass: "owl-dot",
                dotsClass: "owl-dots",
                dots: !0,
                dotsEach: !1,
                dotsData: !1,
                dotsSpeed: !1,
                dotsContainer: !1,
            }),
                (e.prototype.initialize = function () {
                    var b,
                        c = this._core.settings;
                    (this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled")),
                        (this._controls.$previous = a("<" + c.navElement + ">")
                            .addClass(c.navClass[0])
                            .html(c.navText[0])
                            .prependTo(this._controls.$relative)
                            .on(
                                "click",
                                a.proxy(function (a) {
                                    this.prev(c.navSpeed);
                                }, this)
                            )),
                        (this._controls.$next = a("<" + c.navElement + ">")
                            .addClass(c.navClass[1])
                            .html(c.navText[1])
                            .appendTo(this._controls.$relative)
                            .on(
                                "click",
                                a.proxy(function (a) {
                                    this.next(c.navSpeed);
                                }, this)
                            )),
                        c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
                        (this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled")),
                        this._controls.$absolute.on(
                            "click",
                            "div",
                            a.proxy(function (b) {
                                var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
                                b.preventDefault(), this.to(d, c.dotsSpeed);
                            }, this)
                        );
                    for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
                }),
                (e.prototype.destroy = function () {
                    var a, b, c, d;
                    for (a in this._handlers) this.$element.off(a, this._handlers[a]);
                    for (b in this._controls) this._controls[b].remove();
                    for (d in this.overides) this._core[d] = this._overrides[d];
                    for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
                }),
                (e.prototype.update = function () {
                    var a,
                        b,
                        c,
                        d = this._core.clones().length / 2,
                        e = d + this._core.items().length,
                        f = this._core.maximum(!0),
                        g = this._core.settings,
                        h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
                    if (("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy))
                        for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                            if (b >= h || 0 === b) {
                                if ((this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f)) break;
                                (b = 0), ++c;
                            }
                            b += this._core.mergers(this._core.relative(a));
                        }
                }),
                (e.prototype.draw = function () {
                    var b,
                        c = this._core.settings,
                        d = this._core.items().length <= c.items,
                        e = this._core.relative(this._core.current()),
                        f = c.loop || c.rewind;
                    this._controls.$relative.toggleClass("disabled", !c.nav || d),
                        c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
                        this._controls.$absolute.toggleClass("disabled", !c.dots || d),
                        c.dots &&
                        ((b = this._pages.length - this._controls.$absolute.children().length),
                            c.dotsData && 0 !== b
                                ? this._controls.$absolute.html(this._templates.join(""))
                                : b > 0
                                    ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0]))
                                    : b < 0 && this._controls.$absolute.children().slice(b).remove(),
                            this._controls.$absolute.find(".active").removeClass("active"),
                            this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
                }),
                (e.prototype.onTrigger = function (b) {
                    var c = this._core.settings;
                    b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) };
                }),
                (e.prototype.current = function () {
                    var b = this._core.relative(this._core.current());
                    return a
                        .grep(
                            this._pages,
                            a.proxy(function (a, c) {
                                return a.start <= b && a.end >= b;
                            }, this)
                        )
                        .pop();
                }),
                (e.prototype.getPosition = function (b) {
                    var c,
                        d,
                        e = this._core.settings;
                    return (
                        "page" == e.slideBy
                            ? ((c = a.inArray(this.current(), this._pages)), (d = this._pages.length), b ? ++c : --c, (c = this._pages[((c % d) + d) % d].start))
                            : ((c = this._core.relative(this._core.current())), (d = this._core.items().length), b ? (c += e.slideBy) : (c -= e.slideBy)),
                        c
                    );
                }),
                (e.prototype.next = function (b) {
                    a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
                }),
                (e.prototype.prev = function (b) {
                    a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
                }),
                (e.prototype.to = function (b, c, d) {
                    var e;
                    !d && this._pages.length ? ((e = this._pages.length), a.proxy(this._overrides.to, this._core)(this._pages[((b % e) + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
                }),
                (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
        })(window.Zepto || window.jQuery, window, document),
        (function (a, b, c, d) {
            "use strict";
            var e = function (c) {
                (this._core = c),
                    (this._hashes = {}),
                    (this.$element = this._core.$element),
                    (this._handlers = {
                        "initialized.owl.carousel": a.proxy(function (c) {
                            c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
                        }, this),
                        "prepared.owl.carousel": a.proxy(function (b) {
                            if (b.namespace) {
                                var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                                if (!c) return;
                                this._hashes[c] = b.content;
                            }
                        }, this),
                        "changed.owl.carousel": a.proxy(function (c) {
                            if (c.namespace && "position" === c.property.name) {
                                var d = this._core.items(this._core.relative(this._core.current())),
                                    e = a
                                        .map(this._hashes, function (a, b) {
                                            return a === d ? b : null;
                                        })
                                        .join();
                                if (!e || b.location.hash.slice(1) === e) return;
                                b.location.hash = e;
                            }
                        }, this),
                    }),
                    (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                    this.$element.on(this._handlers),
                    a(b).on(
                        "hashchange.owl.navigation",
                        a.proxy(function (a) {
                            var c = b.location.hash.substring(1),
                                e = this._core.$stage.children(),
                                f = this._hashes[c] && e.index(this._hashes[c]);
                            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
                        }, this)
                    );
            };
            (e.Defaults = { URLhashListener: !1 }),
                (e.prototype.destroy = function () {
                    var c, d;
                    a(b).off("hashchange.owl.navigation");
                    for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
                    for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null);
                }),
                (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
        })(window.Zepto || window.jQuery, window, document),
        (function (a, b, c, d) {
            function e(b, c) {
                var e = !1,
                    f = b.charAt(0).toUpperCase() + b.slice(1);
                return (
                    a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
                        if (g[b] !== d) return (e = !c || b), !1;
                    }),
                    e
                );
            }
            function f(a) {
                return e(a, !0);
            }
            var g = a("<support>").get(0).style,
                h = "Webkit Moz O ms".split(" "),
                i = {
                    transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } },
                    animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } },
                },
                j = {
                    csstransforms: function () {
                        return !!e("transform");
                    },
                    csstransforms3d: function () {
                        return !!e("perspective");
                    },
                    csstransitions: function () {
                        return !!e("transition");
                    },
                    cssanimations: function () {
                        return !!e("animation");
                    },
                };
            j.csstransitions() && ((a.support.transition = new String(f("transition"))), (a.support.transition.end = i.transition.end[a.support.transition])),
                j.cssanimations() && ((a.support.animation = new String(f("animation"))), (a.support.animation.end = i.animation.end[a.support.animation])),
                j.csstransforms() && ((a.support.transform = new String(f("transform"))), (a.support.transform3d = j.csstransforms3d()));
        })(window.Zepto || window.jQuery, window, document);

    /*!
     *
     *   typed.js - A JavaScript Typing Animation Library
     *   Author: Matt Boldt <me@mattboldt.com>
     *   Version: v2.0.4
     *   Url: https://github.com/mattboldt/typed.js
     *   License(s): MIT
     *
     */
    (function (t, e) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? (exports.Typed = e()) : (t.Typed = e());
    })(this, function () {
        return (function (t) {
            function e(n) {
                if (s[n]) return s[n].exports;
                var i = (s[n] = { exports: {}, id: n, loaded: !1 });
                return t[n].call(i.exports, i, i.exports, e), (i.loaded = !0), i.exports;
            }
            var s = {};
            return (e.m = t), (e.c = s), (e.p = ""), e(0);
        })([
            function (t, e, s) {
                "use strict";
                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = (function () {
                    function t(t, e) {
                        for (var s = 0; s < e.length; s++) {
                            var n = e[s];
                            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                        }
                    }
                    return function (e, s, n) {
                        return s && t(e.prototype, s), n && t(e, n), e;
                    };
                })(),
                    r = s(1),
                    o = s(3),
                    a = (function () {
                        function t(e, s) {
                            n(this, t), r.initializer.load(this, s, e), this.begin();
                        }
                        return (
                            i(t, [
                                {
                                    key: "toggle",
                                    value: function () {
                                        this.pause.status ? this.start() : this.stop();
                                    },
                                },
                                {
                                    key: "stop",
                                    value: function () {
                                        this.typingComplete || this.pause.status || (this.toggleBlinking(!0), (this.pause.status = !0), this.options.onStop(this.arrayPos, this));
                                    },
                                },
                                {
                                    key: "start",
                                    value: function () {
                                        this.typingComplete ||
                                            (this.pause.status &&
                                                ((this.pause.status = !1),
                                                    this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos),
                                                    this.options.onStart(this.arrayPos, this)));
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function () {
                                        this.reset(!1), this.options.onDestroy(this);
                                    },
                                },
                                {
                                    key: "reset",
                                    value: function () {
                                        var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                                        clearInterval(this.timeout),
                                            this.replaceText(""),
                                            this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), (this.cursor = null)),
                                            (this.strPos = 0),
                                            (this.arrayPos = 0),
                                            (this.curLoop = 0),
                                            t && (this.insertCursor(), this.options.onReset(this), this.begin());
                                    },
                                },
                                {
                                    key: "begin",
                                    value: function () {
                                        var t = this;
                                        (this.typingComplete = !1),
                                            this.shuffleStringsIfNeeded(this),
                                            this.insertCursor(),
                                            this.bindInputFocusEvents && this.bindFocusEvents(),
                                            (this.timeout = setTimeout(function () {
                                                t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos);
                                            }, this.startDelay));
                                    },
                                },
                                {
                                    key: "typewrite",
                                    value: function (t, e) {
                                        var s = this;
                                        this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                                        var n = this.humanizer(this.typeSpeed),
                                            i = 1;
                                        return this.pause.status === !0
                                            ? void this.setPauseStatus(t, e, !0)
                                            : void (this.timeout = setTimeout(function () {
                                                e = o.htmlParser.typeHtmlChars(t, e, s);
                                                var n = 0,
                                                    r = t.substr(e);
                                                if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
                                                    var a = 1;
                                                    (r = /\d+/.exec(r)[0]),
                                                        (a += r.length),
                                                        (n = parseInt(r)),
                                                        (s.temporaryPause = !0),
                                                        s.options.onTypingPaused(s.arrayPos, s),
                                                        (t = t.substring(0, e) + t.substring(e + a)),
                                                        s.toggleBlinking(!0);
                                                }
                                                if ("`" === r.charAt(0)) {
                                                    for (; "`" !== t.substr(e + i).charAt(0) && (i++, !(e + i > t.length)););
                                                    var u = t.substring(0, e),
                                                        l = t.substring(u.length + 1, e + i),
                                                        c = t.substring(e + i + 1);
                                                    (t = u + l + c), i--;
                                                }
                                                s.timeout = setTimeout(function () {
                                                    s.toggleBlinking(!1), e === t.length ? s.doneTyping(t, e) : s.keepTyping(t, e, i), s.temporaryPause && ((s.temporaryPause = !1), s.options.onTypingResumed(s.arrayPos, s));
                                                }, n);
                                            }, n));
                                    },
                                },
                                {
                                    key: "keepTyping",
                                    value: function (t, e, s) {
                                        0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), (e += s);
                                        var n = t.substr(0, e);
                                        this.replaceText(n), this.typewrite(t, e);
                                    },
                                },
                                {
                                    key: "doneTyping",
                                    value: function (t, e) {
                                        var s = this;
                                        this.options.onStringTyped(this.arrayPos, this),
                                            this.toggleBlinking(!0),
                                            (this.arrayPos === this.strings.length - 1 && (this.complete(), this.loop === !1 || this.curLoop === this.loopCount)) ||
                                            (this.timeout = setTimeout(function () {
                                                s.backspace(t, e);
                                            }, this.backDelay));
                                    },
                                },
                                {
                                    key: "backspace",
                                    value: function (t, e) {
                                        var s = this;
                                        if (this.pause.status === !0) return void this.setPauseStatus(t, e, !0);
                                        if (this.fadeOut) return this.initFadeOut();
                                        this.toggleBlinking(!1);
                                        var n = this.humanizer(this.backSpeed);
                                        this.timeout = setTimeout(function () {
                                            e = o.htmlParser.backSpaceHtmlChars(t, e, s);
                                            var n = t.substr(0, e);
                                            if ((s.replaceText(n), s.smartBackspace)) {
                                                var i = s.strings[s.arrayPos + 1];
                                                i && n === i.substr(0, e) ? (s.stopNum = e) : (s.stopNum = 0);
                                            }
                                            e > s.stopNum
                                                ? (e--, s.backspace(t, e))
                                                : e <= s.stopNum &&
                                                (s.arrayPos++,
                                                    s.arrayPos === s.strings.length ? ((s.arrayPos = 0), s.options.onLastStringBackspaced(), s.shuffleStringsIfNeeded(), s.begin()) : s.typewrite(s.strings[s.sequence[s.arrayPos]], e));
                                        }, n);
                                    },
                                },
                                {
                                    key: "complete",
                                    value: function () {
                                        this.options.onComplete(this), this.loop ? this.curLoop++ : (this.typingComplete = !0);
                                    },
                                },
                                {
                                    key: "setPauseStatus",
                                    value: function (t, e, s) {
                                        (this.pause.typewrite = s), (this.pause.curString = t), (this.pause.curStrPos = e);
                                    },
                                },
                                {
                                    key: "toggleBlinking",
                                    value: function (t) {
                                        if (this.cursor && !this.pause.status && this.cursorBlinking !== t) {
                                            this.cursorBlinking = t;
                                            var e = t ? "infinite" : 0;
                                            this.cursor.style.animationIterationCount = e;
                                        }
                                    },
                                },
                                {
                                    key: "humanizer",
                                    value: function (t) {
                                        return Math.round((Math.random() * t) / 2) + t;
                                    },
                                },
                                {
                                    key: "shuffleStringsIfNeeded",
                                    value: function () {
                                        this.shuffle &&
                                            (this.sequence = this.sequence.sort(function () {
                                                return Math.random() - 0.5;
                                            }));
                                    },
                                },
                                {
                                    key: "initFadeOut",
                                    value: function () {
                                        var t = this;
                                        return (
                                            (this.el.className += " " + this.fadeOutClass),
                                            this.cursor && (this.cursor.className += " " + this.fadeOutClass),
                                            setTimeout(function () {
                                                t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), (t.arrayPos = 0));
                                            }, this.fadeOutDelay)
                                        );
                                    },
                                },
                                {
                                    key: "replaceText",
                                    value: function (t) {
                                        this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? (this.el.value = t) : "html" === this.contentType ? (this.el.innerHTML = t) : (this.el.textContent = t);
                                    },
                                },
                                {
                                    key: "bindFocusEvents",
                                    value: function () {
                                        var t = this;
                                        this.isInput &&
                                            (this.el.addEventListener("focus", function (e) {
                                                t.stop();
                                            }),
                                                this.el.addEventListener("blur", function (e) {
                                                    (t.el.value && 0 !== t.el.value.length) || t.start();
                                                }));
                                    },
                                },
                                {
                                    key: "insertCursor",
                                    value: function () {
                                        this.showCursor &&
                                            (this.cursor ||
                                                ((this.cursor = document.createElement("span")),
                                                    (this.cursor.className = "typed-cursor"),
                                                    (this.cursor.innerHTML = this.cursorChar),
                                                    this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
                                    },
                                },
                            ]),
                            t
                        );
                    })();
                (e["default"] = a), (t.exports = e["default"]);
            },
            function (t, e, s) {
                "use strict";
                function n(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var s = arguments[e];
                            for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
                        }
                        return t;
                    },
                    o = (function () {
                        function t(t, e) {
                            for (var s = 0; s < e.length; s++) {
                                var n = e[s];
                                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                            }
                        }
                        return function (e, s, n) {
                            return s && t(e.prototype, s), n && t(e, n), e;
                        };
                    })(),
                    a = s(2),
                    u = n(a),
                    l = (function () {
                        function t() {
                            i(this, t);
                        }
                        return (
                            o(t, [
                                {
                                    key: "load",
                                    value: function (t, e, s) {
                                        if (
                                            ("string" == typeof s ? (t.el = document.querySelector(s)) : (t.el = s),
                                                (t.options = r({}, u["default"], e)),
                                                (t.isInput = "input" === t.el.tagName.toLowerCase()),
                                                (t.attr = t.options.attr),
                                                (t.bindInputFocusEvents = t.options.bindInputFocusEvents),
                                                (t.showCursor = !t.isInput && t.options.showCursor),
                                                (t.cursorChar = t.options.cursorChar),
                                                (t.cursorBlinking = !0),
                                                (t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent),
                                                (t.contentType = t.options.contentType),
                                                (t.typeSpeed = t.options.typeSpeed),
                                                (t.startDelay = t.options.startDelay),
                                                (t.backSpeed = t.options.backSpeed),
                                                (t.smartBackspace = t.options.smartBackspace),
                                                (t.backDelay = t.options.backDelay),
                                                (t.fadeOut = t.options.fadeOut),
                                                (t.fadeOutClass = t.options.fadeOutClass),
                                                (t.fadeOutDelay = t.options.fadeOutDelay),
                                                (t.isPaused = !1),
                                                (t.strings = t.options.strings.map(function (t) {
                                                    return t.trim();
                                                })),
                                                "string" == typeof t.options.stringsElement ? (t.stringsElement = document.querySelector(t.options.stringsElement)) : (t.stringsElement = t.options.stringsElement),
                                                t.stringsElement)
                                        ) {
                                            (t.strings = []), (t.stringsElement.style.display = "none");
                                            var n = Array.prototype.slice.apply(t.stringsElement.children),
                                                i = !0,
                                                o = !1,
                                                a = void 0;
                                            try {
                                                for (var l, c = n[Symbol.iterator](); !(i = (l = c.next()).done); i = !0) {
                                                    var p = l.value;
                                                    t.strings.push(p.innerHTML.trim());
                                                }
                                            } catch (h) {
                                                (o = !0), (a = h);
                                            } finally {
                                                try {
                                                    !i && c["return"] && c["return"]();
                                                } finally {
                                                    if (o) throw a;
                                                }
                                            }
                                        }
                                        (t.strPos = 0),
                                            (t.arrayPos = 0),
                                            (t.stopNum = 0),
                                            (t.loop = t.options.loop),
                                            (t.loopCount = t.options.loopCount),
                                            (t.curLoop = 0),
                                            (t.shuffle = t.options.shuffle),
                                            (t.sequence = []),
                                            (t.pause = { status: !1, typewrite: !0, curString: "", curStrPos: 0 }),
                                            (t.typingComplete = !1);
                                        for (var f in t.strings) t.sequence[f] = f;
                                        (t.currentElContent = this.getCurrentElContent(t)), (t.autoInsertCss = t.options.autoInsertCss), this.appendAnimationCss(t);
                                    },
                                },
                                {
                                    key: "getCurrentElContent",
                                    value: function (t) {
                                        var e = "";
                                        return (e = t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent);
                                    },
                                },
                                {
                                    key: "appendAnimationCss",
                                    value: function (t) {
                                        if (t.autoInsertCss && t.showCursor && t.fadeOut) {
                                            var e = document.createElement("style");
                                            e.type = "text/css";
                                            var s = "";
                                            t.showCursor &&
                                                (s +=
                                                    "\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
                                                t.fadeOut &&
                                                (s += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      "),
                                                0 !== e.length && ((e.innerHTML = s), document.head.appendChild(e));
                                        }
                                    },
                                },
                            ]),
                            t
                        );
                    })();
                e["default"] = l;
                var c = new l();
                e.initializer = c;
            },
            function (t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var s = {
                    strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
                    stringsElement: null,
                    typeSpeed: 0,
                    startDelay: 0,
                    backSpeed: 0,
                    smartBackspace: !0,
                    shuffle: !1,
                    backDelay: 700,
                    fadeOut: !1,
                    fadeOutClass: "typed-fade-out",
                    fadeOutDelay: 500,
                    loop: !1,
                    loopCount: 1 / 0,
                    showCursor: !0,
                    cursorChar: "|",
                    autoInsertCss: !0,
                    attr: null,
                    bindInputFocusEvents: !1,
                    contentType: "html",
                    onComplete: function (t) { },
                    preStringTyped: function (t, e) { },
                    onStringTyped: function (t, e) { },
                    onLastStringBackspaced: function (t) { },
                    onTypingPaused: function (t, e) { },
                    onTypingResumed: function (t, e) { },
                    onReset: function (t) { },
                    onStop: function (t, e) { },
                    onStart: function (t, e) { },
                    onDestroy: function (t) { },
                };
                (e["default"] = s), (t.exports = e["default"]);
            },
            function (t, e) {
                "use strict";
                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                Object.defineProperty(e, "__esModule", { value: !0 });
                var n = (function () {
                    function t(t, e) {
                        for (var s = 0; s < e.length; s++) {
                            var n = e[s];
                            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                        }
                    }
                    return function (e, s, n) {
                        return s && t(e.prototype, s), n && t(e, n), e;
                    };
                })(),
                    i = (function () {
                        function t() {
                            s(this, t);
                        }
                        return (
                            n(t, [
                                {
                                    key: "typeHtmlChars",
                                    value: function (t, e, s) {
                                        if ("html" !== s.contentType) return e;
                                        var n = t.substr(e).charAt(0);
                                        if ("<" === n || "&" === n) {
                                            var i = "";
                                            for (i = "<" === n ? ">" : ";"; t.substr(e + 1).charAt(0) !== i && (e++, !(e + 1 > t.length)););
                                            e++;
                                        }
                                        return e;
                                    },
                                },
                                {
                                    key: "backSpaceHtmlChars",
                                    value: function (t, e, s) {
                                        if ("html" !== s.contentType) return e;
                                        var n = t.substr(e).charAt(0);
                                        if (">" === n || ";" === n) {
                                            var i = "";
                                            for (i = ">" === n ? "<" : "&"; t.substr(e - 1).charAt(0) !== i && (e--, !(e < 0)););
                                            e--;
                                        }
                                        return e;
                                    },
                                },
                            ]),
                            t
                        );
                    })();
                e["default"] = i;
                var r = new i();
                e.htmlParser = r;
            },
        ]);
    });
    //# sourceMappingURL=typed.min.js.map

    /*header starts*/
    $(document).ready(function () {
        if (window.innerWidth > 991) {
            var lastScrollTop = 0;
            $(window).scroll(function (event) {
                var currentScrollTop = $(this).scrollTop();
                if (currentScrollTop > lastScrollTop) {
                    // downscroll code
                    $("nav.header-mi").removeClass("active");
                } else {
                    // upscroll code
                    $("nav.header-mi").addClass("active");
                }

                if (currentScrollTop < 200) {
                    $("nav.header-mi").addClass("active");
                }

                if (currentScrollTop < 200) {
                    $("nav.header-mi").css("background-color", "transparent");
                } else {
                    $("nav.header-mi").css("background-color", "");
                }
                lastScrollTop = currentScrollTop;
            });
            $("nav.header-mi").css("background-color", "transparent");
        }
    });
    /*header ends*/

    /*back to top starts*/
    $(document).ready(function () {
        if (window.innerWidth > 991) {
            var lastScrollTop = 0;
            $(window).scroll(function (event) {
                var currentScrollTop = $(this).scrollTop();
                if (currentScrollTop > lastScrollTop) {
                    // downscroll code
                    $(".backToTop").removeClass("active");
                } else {
                    // upscroll code
                    $(".backToTop").addClass("active");
                }
                if (currentScrollTop == 0) {
                    $(".backToTop").removeClass("active");
                }
                lastScrollTop = currentScrollTop;
            });

            $(".backToTop").click(function () {
                $("html, body").animate(
                    {
                        scrollTop: 0,
                    },
                    1000
                );
            });
        }
    });
    /*back to top ends*/

    /*menu starts*/
    $(document).ready(function () {
        $(".header-mi .menu-btn").click(function () {
            $(".header-mi .menu-btn").toggleClass("active");
            $(".menu").toggleClass("active");
            $("body").toggleClass("active-menu");
        });

        $(".menu-left a").click(function () {
            var activeSubMenuName = $(this).attr("data-name");
            $(".menu-left a").removeClass("active");
            $(this).addClass("active");
            $(".menu-right>div").css("display", "none");
            $("." + activeSubMenuName).css("display", "block");
        });

        if (window.innerWidth < 768) {
            $(".app-menu").css("display", "");
            $(".menu-left a").removeClass("active");
        }

        $(".menu-back").click(function () {
            $(".menu-right>div").css("display", "none");
        });
    });
    /*menu ends*/

    /*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
     * https://jqueryvalidation.org/
     * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
    !(function (a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? (module.exports = a(require("jquery"))) : a(jQuery);
    })(function (a) {
        a.extend(a.fn, {
            validate: function (b) {
                if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var c = a.data(this[0], "validator");
                return c
                    ? c
                    : (this.attr("novalidate", "novalidate"),
                        (c = new a.validator(b, this[0])),
                        a.data(this[0], "validator", c),
                        c.settings.onsubmit &&
                        (this.on("click.validate", ":submit", function (b) {
                            (c.submitButton = b.currentTarget), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0);
                        }),
                            this.on("submit.validate", function (b) {
                                function d() {
                                    var d, e;
                                    return (
                                        c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),
                                        !c.settings.submitHandler || ((e = c.settings.submitHandler.call(c, c.currentForm, b)), d && d.remove(), void 0 !== e && e)
                                    );
                                }
                                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? ((c.cancelSubmit = !1), d()) : c.form() ? (c.pendingRequest ? ((c.formSubmitted = !0), !1) : d()) : (c.focusInvalid(), !1);
                            })),
                        c);
            },
            valid: function () {
                var b, c, d;
                return (
                    a(this[0]).is("form")
                        ? (b = this.validate().form())
                        : ((d = []),
                            (b = !0),
                            (c = a(this[0].form).validate()),
                            this.each(function () {
                                (b = c.element(this) && b), b || (d = d.concat(c.errorList));
                            }),
                            (c.errorList = d)),
                    b
                );
            },
            rules: function (b, c) {
                var d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j = this[0];
                if (null != j && (!j.form && j.hasAttribute("contenteditable") && ((j.form = this.closest("form")[0]), (j.name = this.attr("name"))), null != j.form)) {
                    if (b)
                        switch (((d = a.data(j.form, "validator").settings), (e = d.rules), (f = a.validator.staticRules(j)), b)) {
                            case "add":
                                a.extend(f, a.validator.normalizeRule(c)), delete f.messages, (e[j.name] = f), c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                                break;
                            case "remove":
                                return c
                                    ? ((i = {}),
                                        a.each(c.split(/\s/), function (a, b) {
                                            (i[b] = f[b]), delete f[b];
                                        }),
                                        i)
                                    : (delete e[j.name], f);
                        }
                    return (
                        (g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j)),
                        g.required && ((h = g.required), delete g.required, (g = a.extend({ required: h }, g))),
                        g.remote && ((h = g.remote), delete g.remote, (g = a.extend(g, { remote: h }))),
                        g
                    );
                }
            },
        }),
            a.extend(a.expr.pseudos || a.expr[":"], {
                blank: function (b) {
                    return !a.trim("" + a(b).val());
                },
                filled: function (b) {
                    var c = a(b).val();
                    return null !== c && !!a.trim("" + c);
                },
                unchecked: function (b) {
                    return !a(b).prop("checked");
                },
            }),
            (a.validator = function (b, c) {
                (this.settings = a.extend(!0, {}, a.validator.defaults, b)), (this.currentForm = c), this.init();
            }),
            (a.validator.format = function (b, c) {
                return 1 === arguments.length
                    ? function () {
                        var c = a.makeArray(arguments);
                        return c.unshift(b), a.validator.format.apply(this, c);
                    }
                    : void 0 === c
                        ? b
                        : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)),
                            c.constructor !== Array && (c = [c]),
                            a.each(c, function (a, c) {
                                b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                                    return c;
                                });
                            }),
                            b);
            }),
            a.extend(a.validator, {
                defaults: {
                    messages: {},
                    groups: {},
                    rules: {},
                    errorClass: "error",
                    pendingClass: "pending",
                    validClass: "valid",
                    errorElement: "label",
                    focusCleanup: !1,
                    focusInvalid: !0,
                    errorContainer: a([]),
                    errorLabelContainer: a([]),
                    onsubmit: !0,
                    ignore: ":hidden",
                    ignoreTitle: !1,
                    onfocusin: function (a) {
                        (this.lastActive = a), this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)));
                    },
                    onfocusout: function (a) {
                        this.checkable(a) || (!(a.name in this.submitted) && this.optional(a)) || this.element(a);
                    },
                    onkeyup: function (b, c) {
                        var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                        (9 === c.which && "" === this.elementValue(b)) || a.inArray(c.keyCode, d) !== -1 || ((b.name in this.submitted || b.name in this.invalid) && this.element(b));
                    },
                    onclick: function (a) {
                        a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode);
                    },
                    highlight: function (b, c, d) {
                        "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
                    },
                    unhighlight: function (b, c, d) {
                        "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d);
                    },
                },
                setDefaults: function (b) {
                    a.extend(a.validator.defaults, b);
                },
                messages: {
                    required: "This field is required.",
                    remote: "Please fix this field.",
                    email: "Please enter a valid email address.",
                    url: "Please enter a valid URL.",
                    date: "Please enter a valid date.",
                    dateISO: "Please enter a valid date (ISO).",
                    number: "Please enter a valid number.",
                    digits: "Please enter only digits.",
                    equalTo: "Please enter the same value again.",
                    maxlength: a.validator.format("Please enter no more than {0} characters."),
                    minlength: a.validator.format("Please enter at least {0} characters."),
                    rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
                    range: a.validator.format("Please enter a value between {0} and {1}."),
                    max: a.validator.format("Please enter a value less than or equal to {0}."),
                    min: a.validator.format("Please enter a value greater than or equal to {0}."),
                    step: a.validator.format("Please enter a multiple of {0}."),
                },
                autoCreateRanges: !1,
                prototype: {
                    init: function () {
                        function b(b) {
                            !this.form && this.hasAttribute("contenteditable") && ((this.form = a(this).closest("form")[0]), (this.name = a(this).attr("name")));
                            var c = a.data(this.form, "validator"),
                                d = "on" + b.type.replace(/^validate/, ""),
                                e = c.settings;
                            e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b);
                        }
                        (this.labelContainer = a(this.settings.errorLabelContainer)),
                            (this.errorContext = (this.labelContainer.length && this.labelContainer) || a(this.currentForm)),
                            (this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer)),
                            (this.submitted = {}),
                            (this.valueCache = {}),
                            (this.pendingRequest = 0),
                            (this.pending = {}),
                            (this.invalid = {}),
                            this.reset();
                        var c,
                            d = (this.groups = {});
                        a.each(this.settings.groups, function (b, c) {
                            "string" == typeof c && (c = c.split(/\s/)),
                                a.each(c, function (a, c) {
                                    d[c] = b;
                                });
                        }),
                            (c = this.settings.rules),
                            a.each(c, function (b, d) {
                                c[b] = a.validator.normalizeRule(d);
                            }),
                            a(this.currentForm)
                                .on(
                                    "focusin.validate focusout.validate keyup.validate",
                                    ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                                    b
                                )
                                .on("click.validate", "select, option, [type='radio'], [type='checkbox']", b),
                            this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                    },
                    form: function () {
                        return (
                            this.checkForm(), a.extend(this.submitted, this.errorMap), (this.invalid = a.extend({}, this.errorMap)), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                        );
                    },
                    checkForm: function () {
                        this.prepareForm();
                        for (var a = 0, b = (this.currentElements = this.elements()); b[a]; a++) this.check(b[a]);
                        return this.valid();
                    },
                    element: function (b) {
                        var c,
                            d,
                            e = this.clean(b),
                            f = this.validationTargetFor(e),
                            g = this,
                            h = !0;
                        return (
                            void 0 === f
                                ? delete this.invalid[e.name]
                                : (this.prepareElement(f),
                                    (this.currentElements = a(f)),
                                    (d = this.groups[f.name]),
                                    d &&
                                    a.each(this.groups, function (a, b) {
                                        b === d && a !== f.name && ((e = g.validationTargetFor(g.clean(g.findByName(a)))), e && e.name in g.invalid && (g.currentElements.push(e), (h = g.check(e) && h)));
                                    }),
                                    (c = this.check(f) !== !1),
                                    (h = h && c),
                                    c ? (this.invalid[f.name] = !1) : (this.invalid[f.name] = !0),
                                    this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                                    this.showErrors(),
                                    a(b).attr("aria-invalid", !c)),
                            h
                        );
                    },
                    showErrors: function (b) {
                        if (b) {
                            var c = this;
                            a.extend(this.errorMap, b),
                                (this.errorList = a.map(this.errorMap, function (a, b) {
                                    return { message: a, element: c.findByName(b)[0] };
                                })),
                                (this.successList = a.grep(this.successList, function (a) {
                                    return !(a.name in b);
                                }));
                        }
                        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
                    },
                    resetForm: function () {
                        a.fn.resetForm && a(this.currentForm).resetForm(), (this.invalid = {}), (this.submitted = {}), this.prepareForm(), this.hideErrors();
                        var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                        this.resetElements(b);
                    },
                    resetElements: function (a) {
                        var b;
                        if (this.settings.unhighlight) for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
                        else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
                    },
                    numberOfInvalids: function () {
                        return this.objectLength(this.invalid);
                    },
                    objectLength: function (a) {
                        var b,
                            c = 0;
                        for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
                        return c;
                    },
                    hideErrors: function () {
                        this.hideThese(this.toHide);
                    },
                    hideThese: function (a) {
                        a.not(this.containers).text(""), this.addWrapper(a).hide();
                    },
                    valid: function () {
                        return 0 === this.size();
                    },
                    size: function () {
                        return this.errorList.length;
                    },
                    focusInvalid: function () {
                        if (this.settings.focusInvalid)
                            try {
                                a(this.findLastActive() || (this.errorList.length && this.errorList[0].element) || [])
                                    .filter(":visible")
                                    .focus()
                                    .trigger("focusin");
                            } catch (b) { }
                    },
                    findLastActive: function () {
                        var b = this.lastActive;
                        return (
                            b &&
                            1 ===
                            a.grep(this.errorList, function (a) {
                                return a.element.name === b.name;
                            }).length &&
                            b
                        );
                    },
                    elements: function () {
                        var b = this,
                            c = {};
                        return a(this.currentForm)
                            .find("input, select, textarea, [contenteditable]")
                            .not(":submit, :reset, :image, :disabled")
                            .not(this.settings.ignore)
                            .filter(function () {
                                var d = this.name || a(this).attr("name");
                                return (
                                    !d && b.settings.debug && window.console && console.error("%o has no name assigned", this),
                                    this.hasAttribute("contenteditable") && ((this.form = a(this).closest("form")[0]), (this.name = d)),
                                    !(d in c || !b.objectLength(a(this).rules())) && ((c[d] = !0), !0)
                                );
                            });
                    },
                    clean: function (b) {
                        return a(b)[0];
                    },
                    errors: function () {
                        var b = this.settings.errorClass.split(" ").join(".");
                        return a(this.settings.errorElement + "." + b, this.errorContext);
                    },
                    resetInternals: function () {
                        (this.successList = []), (this.errorList = []), (this.errorMap = {}), (this.toShow = a([])), (this.toHide = a([]));
                    },
                    reset: function () {
                        this.resetInternals(), (this.currentElements = a([]));
                    },
                    prepareForm: function () {
                        this.reset(), (this.toHide = this.errors().add(this.containers));
                    },
                    prepareElement: function (a) {
                        this.reset(), (this.toHide = this.errorsFor(a));
                    },
                    elementValue: function (b) {
                        var c,
                            d,
                            e = a(b),
                            f = b.type;
                        return "radio" === f || "checkbox" === f
                            ? this.findByName(b.name).filter(":checked").val()
                            : "number" === f && "undefined" != typeof b.validity
                                ? b.validity.badInput
                                    ? "NaN"
                                    : e.val()
                                : ((c = b.hasAttribute("contenteditable") ? e.text() : e.val()),
                                    "file" === f
                                        ? "C:\\fakepath\\" === c.substr(0, 12)
                                            ? c.substr(12)
                                            : ((d = c.lastIndexOf("/")), d >= 0 ? c.substr(d + 1) : ((d = c.lastIndexOf("\\")), d >= 0 ? c.substr(d + 1) : c))
                                        : "string" == typeof c
                                            ? c.replace(/\r/g, "")
                                            : c);
                    },
                    check: function (b) {
                        b = this.validationTargetFor(this.clean(b));
                        var c,
                            d,
                            e,
                            f,
                            g = a(b).rules(),
                            h = a.map(g, function (a, b) {
                                return b;
                            }).length,
                            i = !1,
                            j = this.elementValue(b);
                        if (("function" == typeof g.normalizer ? (f = g.normalizer) : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), f)) {
                            if (((j = f.call(b, j)), "string" != typeof j)) throw new TypeError("The normalizer should return a string value.");
                            delete g.normalizer;
                        }
                        for (d in g) {
                            e = { method: d, parameters: g[d] };
                            try {
                                if (((c = a.validator.methods[d].call(this, j, b, e.parameters)), "dependency-mismatch" === c && 1 === h)) {
                                    i = !0;
                                    continue;
                                }
                                if (((i = !1), "pending" === c)) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                                if (!c) return this.formatAndAdd(b, e), !1;
                            } catch (k) {
                                throw (
                                    (this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k),
                                        k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."),
                                        k)
                                );
                            }
                        }
                        if (!i) return this.objectLength(g) && this.successList.push(b), !0;
                    },
                    customDataMessage: function (b, c) {
                        return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg");
                    },
                    customMessage: function (a, b) {
                        var c = this.settings.messages[a];
                        return c && (c.constructor === String ? c : c[b]);
                    },
                    findDefined: function () {
                        for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a];
                    },
                    defaultMessage: function (b, c) {
                        "string" == typeof c && (c = { method: c });
                        var d = this.findDefined(
                            this.customMessage(b.name, c.method),
                            this.customDataMessage(b, c.method),
                            (!this.settings.ignoreTitle && b.title) || void 0,
                            a.validator.messages[c.method],
                            "<strong>Warning: No message defined for " + b.name + "</strong>"
                        ),
                            e = /\$?\{(\d+)\}/g;
                        return "function" == typeof d ? (d = d.call(this, c.parameters, b)) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d;
                    },
                    formatAndAdd: function (a, b) {
                        var c = this.defaultMessage(a, b);
                        this.errorList.push({ message: c, element: a, method: b.method }), (this.errorMap[a.name] = c), (this.submitted[a.name] = c);
                    },
                    addWrapper: function (a) {
                        return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a;
                    },
                    defaultShowErrors: function () {
                        var a, b, c;
                        for (a = 0; this.errorList[a]; a++)
                            (c = this.errorList[a]), this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                        if ((this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                        if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                        (this.toHide = this.toHide.not(this.toShow)), this.hideErrors(), this.addWrapper(this.toShow).show();
                    },
                    validElements: function () {
                        return this.currentElements.not(this.invalidElements());
                    },
                    invalidElements: function () {
                        return a(this.errorList).map(function () {
                            return this.element;
                        });
                    },
                    showLabel: function (b, c) {
                        var d,
                            e,
                            f,
                            g,
                            h = this.errorsFor(b),
                            i = this.idOrName(b),
                            j = a(b).attr("aria-describedby");
                        h.length
                            ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c))
                            : ((h = a("<" + this.settings.errorElement + ">")
                                .attr("id", i + "-error")
                                .addClass(this.settings.errorClass)
                                .html(c || "")),
                                (d = h),
                                this.settings.wrapper &&
                                (d = h
                                    .hide()
                                    .show()
                                    .wrap("<" + this.settings.wrapper + "/>")
                                    .parent()),
                                this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b),
                                h.is("label")
                                    ? h.attr("for", i)
                                    : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length &&
                                    ((f = h.attr("id")),
                                        j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : (j = f),
                                        a(b).attr("aria-describedby", j),
                                        (e = this.groups[b.name]),
                                        e &&
                                        ((g = this),
                                            a.each(g.groups, function (b, c) {
                                                c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"));
                                            })))),
                            !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)),
                            (this.toShow = this.toShow.add(h));
                    },
                    errorsFor: function (b) {
                        var c = this.escapeCssMeta(this.idOrName(b)),
                            d = a(b).attr("aria-describedby"),
                            e = "label[for='" + c + "'], label[for='" + c + "'] *";
                        return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e);
                    },
                    escapeCssMeta: function (a) {
                        return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
                    },
                    idOrName: function (a) {
                        return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
                    },
                    validationTargetFor: function (b) {
                        return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0];
                    },
                    checkable: function (a) {
                        return /radio|checkbox/i.test(a.type);
                    },
                    findByName: function (b) {
                        return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']");
                    },
                    getLength: function (b, c) {
                        switch (c.nodeName.toLowerCase()) {
                            case "select":
                                return a("option:selected", c).length;
                            case "input":
                                if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length;
                        }
                        return b.length;
                    },
                    depend: function (a, b) {
                        return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b);
                    },
                    dependTypes: {
                        boolean: function (a) {
                            return a;
                        },
                        string: function (b, c) {
                            return !!a(b, c.form).length;
                        },
                        function: function (a, b) {
                            return a(b);
                        },
                    },
                    optional: function (b) {
                        var c = this.elementValue(b);
                        return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch";
                    },
                    startRequest: function (b) {
                        this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), (this.pending[b.name] = !0));
                    },
                    stopRequest: function (b, c) {
                        this.pendingRequest--,
                            this.pendingRequest < 0 && (this.pendingRequest = 0),
                            delete this.pending[b.name],
                            a(b).removeClass(this.settings.pendingClass),
                            c && 0 === this.pendingRequest && this.formSubmitted && this.form()
                                ? (a(this.currentForm).submit(), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), (this.formSubmitted = !1))
                                : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), (this.formSubmitted = !1));
                    },
                    previousValue: function (b, c) {
                        return (c = ("string" == typeof c && c) || "remote"), a.data(b, "previousValue") || a.data(b, "previousValue", { old: null, valid: !0, message: this.defaultMessage(b, { method: c }) });
                    },
                    destroy: function () {
                        this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
                    },
                },
                classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } },
                addClassRules: function (b, c) {
                    b.constructor === String ? (this.classRuleSettings[b] = c) : a.extend(this.classRuleSettings, b);
                },
                classRules: function (b) {
                    var c = {},
                        d = a(b).attr("class");
                    return (
                        d &&
                        a.each(d.split(" "), function () {
                            this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]);
                        }),
                        c
                    );
                },
                normalizeAttributeRule: function (a, b, c, d) {
                    /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && ((d = Number(d)), isNaN(d) && (d = void 0)), d || 0 === d ? (a[c] = d) : b === c && "range" !== b && (a[c] = !0);
                },
                attributeRules: function (b) {
                    var c,
                        d,
                        e = {},
                        f = a(b),
                        g = b.getAttribute("type");
                    for (c in a.validator.methods) "required" === c ? ((d = b.getAttribute(c)), "" === d && (d = !0), (d = !!d)) : (d = f.attr(c)), this.normalizeAttributeRule(e, g, c, d);
                    return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e;
                },
                dataRules: function (b) {
                    var c,
                        d,
                        e = {},
                        f = a(b),
                        g = b.getAttribute("type");
                    for (c in a.validator.methods) (d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase())), this.normalizeAttributeRule(e, g, c, d);
                    return e;
                },
                staticRules: function (b) {
                    var c = {},
                        d = a.data(b.form, "validator");
                    return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c;
                },
                normalizeRules: function (b, c) {
                    return (
                        a.each(b, function (d, e) {
                            if (e === !1) return void delete b[d];
                            if (e.param || e.depends) {
                                var f = !0;
                                switch (typeof e.depends) {
                                    case "string":
                                        f = !!a(e.depends, c.form).length;
                                        break;
                                    case "function":
                                        f = e.depends.call(c, c);
                                }
                                f ? (b[d] = void 0 === e.param || e.param) : (a.data(c.form, "validator").resetElements(a(c)), delete b[d]);
                            }
                        }),
                        a.each(b, function (d, e) {
                            b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e;
                        }),
                        a.each(["minlength", "maxlength"], function () {
                            b[this] && (b[this] = Number(b[this]));
                        }),
                        a.each(["rangelength", "range"], function () {
                            var c;
                            b[this] &&
                                (a.isArray(b[this]) ? (b[this] = [Number(b[this][0]), Number(b[this][1])]) : "string" == typeof b[this] && ((c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/)), (b[this] = [Number(c[0]), Number(c[1])])));
                        }),
                        a.validator.autoCreateRanges &&
                        (null != b.min && null != b.max && ((b.range = [b.min, b.max]), delete b.min, delete b.max),
                            null != b.minlength && null != b.maxlength && ((b.rangelength = [b.minlength, b.maxlength]), delete b.minlength, delete b.maxlength)),
                        b
                    );
                },
                normalizeRule: function (b) {
                    if ("string" == typeof b) {
                        var c = {};
                        a.each(b.split(/\s/), function () {
                            c[this] = !0;
                        }),
                            (b = c);
                    }
                    return b;
                },
                addMethod: function (b, c, d) {
                    (a.validator.methods[b] = c), (a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b]), c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b));
                },
                methods: {
                    required: function (b, c, d) {
                        if (!this.depend(d, c)) return "dependency-mismatch";
                        if ("select" === c.nodeName.toLowerCase()) {
                            var e = a(c).val();
                            return e && e.length > 0;
                        }
                        return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0;
                    },
                    email: function (a, b) {
                        return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
                    },
                    url: function (a, b) {
                        return (
                            this.optional(b) ||
                            /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(
                                a
                            )
                        );
                    },
                    date: function (a, b) {
                        return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString());
                    },
                    dateISO: function (a, b) {
                        return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a);
                    },
                    number: function (a, b) {
                        return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
                    },
                    digits: function (a, b) {
                        return this.optional(b) || /^\d+$/.test(a);
                    },
                    minlength: function (b, c, d) {
                        var e = a.isArray(b) ? b.length : this.getLength(b, c);
                        return this.optional(c) || e >= d;
                    },
                    maxlength: function (b, c, d) {
                        var e = a.isArray(b) ? b.length : this.getLength(b, c);
                        return this.optional(c) || e <= d;
                    },
                    rangelength: function (b, c, d) {
                        var e = a.isArray(b) ? b.length : this.getLength(b, c);
                        return this.optional(c) || (e >= d[0] && e <= d[1]);
                    },
                    min: function (a, b, c) {
                        return this.optional(b) || a >= c;
                    },
                    max: function (a, b, c) {
                        return this.optional(b) || a <= c;
                    },
                    range: function (a, b, c) {
                        return this.optional(b) || (a >= c[0] && a <= c[1]);
                    },
                    step: function (b, c, d) {
                        var e,
                            f = a(c).attr("type"),
                            g = "Step attribute on input type " + f + " is not supported.",
                            h = ["text", "number", "range"],
                            i = new RegExp("\\b" + f + "\\b"),
                            j = f && !i.test(h.join()),
                            k = function (a) {
                                var b = ("" + a).match(/(?:\.(\d+))?$/);
                                return b && b[1] ? b[1].length : 0;
                            },
                            l = function (a) {
                                return Math.round(a * Math.pow(10, e));
                            },
                            m = !0;
                        if (j) throw new Error(g);
                        return (e = k(d)), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m;
                    },
                    equalTo: function (b, c, d) {
                        var e = a(d);
                        return (
                            this.settings.onfocusout &&
                            e.not(".validate-equalTo-blur").length &&
                            e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                                a(c).valid();
                            }),
                            b === e.val()
                        );
                    },
                    remote: function (b, c, d, e) {
                        if (this.optional(c)) return "dependency-mismatch";
                        e = ("string" == typeof e && e) || "remote";
                        var f,
                            g,
                            h,
                            i = this.previousValue(c, e);
                        return (
                            this.settings.messages[c.name] || (this.settings.messages[c.name] = {}),
                            (i.originalMessage = i.originalMessage || this.settings.messages[c.name][e]),
                            (this.settings.messages[c.name][e] = i.message),
                            (d = ("string" == typeof d && { url: d }) || d),
                            (h = a.param(a.extend({ data: b }, d.data))),
                            i.old === h
                                ? i.valid
                                : ((i.old = h),
                                    (f = this),
                                    this.startRequest(c),
                                    (g = {}),
                                    (g[c.name] = b),
                                    a.ajax(
                                        a.extend(
                                            !0,
                                            {
                                                mode: "abort",
                                                port: "validate" + c.name,
                                                dataType: "json",
                                                data: g,
                                                context: f.currentForm,
                                                success: function (a) {
                                                    var d,
                                                        g,
                                                        h,
                                                        j = a === !0 || "true" === a;
                                                    (f.settings.messages[c.name][e] = i.originalMessage),
                                                        j
                                                            ? ((h = f.formSubmitted), f.resetInternals(), (f.toHide = f.errorsFor(c)), (f.formSubmitted = h), f.successList.push(c), (f.invalid[c.name] = !1), f.showErrors())
                                                            : ((d = {}), (g = a || f.defaultMessage(c, { method: e, parameters: b })), (d[c.name] = i.message = g), (f.invalid[c.name] = !0), f.showErrors(d)),
                                                        (i.valid = j),
                                                        f.stopRequest(c, j);
                                                },
                                            },
                                            d
                                        )
                                    ),
                                    "pending")
                        );
                    },
                },
            });
        var b,
            c = {};
        return (
            a.ajaxPrefilter
                ? a.ajaxPrefilter(function (a, b, d) {
                    var e = a.port;
                    "abort" === a.mode && (c[e] && c[e].abort(), (c[e] = d));
                })
                : ((b = a.ajax),
                    (a.ajax = function (d) {
                        var e = ("mode" in d ? d : a.ajaxSettings).mode,
                            f = ("port" in d ? d : a.ajaxSettings).port;
                        return "abort" === e ? (c[f] && c[f].abort(), (c[f] = b.apply(this, arguments)), c[f]) : b.apply(this, arguments);
                    })),
            a
        );
    });
}
/*
     FILE ARCHIVED ON 11:32:04 Feb 24, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:49:31 Feb 04, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 130.897
  LoadShardBlock: 107.627 (3)
  load_resource: 67.673
  CDXLines.iter: 19.629 (3)
  RedisCDXSource: 0.742
  esindex: 0.015
  PetaboxLoader3.resolve: 47.324
  exclusion.robots: 0.345
  PetaboxLoader3.datanode: 118.508 (4)
  exclusion.robots.policy: 0.331
*/
