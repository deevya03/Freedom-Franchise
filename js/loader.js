(function() {
    function o() {
        var n = function() {
            if (e.animations) { this.removeEventListener(s, n) }
            u()
        };
        window.addEventListener("scroll", a);
        classie.add(t, "loading");
        if (e.animations) { t.addEventListener(s, n) } else { n() }
    }

    function u() {
        var i = function(r) {
            var i = 0,
                o = setInterval(function() {
                    i = Math.min(i + Math.random() * .1, 1);
                    r.setProgress(i);
                    if (i === 1) {
                        classie.remove(t, "loading");
                        classie.add(t, "loaded");
                        clearInterval(o);
                        var u = function(t) {
                            if (e.animations) {
                                if (t.target !== n) return;
                                this.removeEventListener(s, u)
                            }
                            classie.add(document.body, "layout-switch");
                            window.removeEventListener("scroll", a)
                        };
                        if (e.animations) { n.addEventListener(s, u) } else { u() }
                    }
                }, 80)
        };
        r.setProgressFn(i)
    }

    function a() { window.scrollTo(0, 0) }
    var e = { animations: Modernizr.cssanimations },
        t = document.getElementById("ip-container"),
        n = t.querySelector("header.ip-header"),
        r = new PathLoader(document.getElementById("ip-loader-circle")),
        i = { WebkitAnimation: "webkitAnimationEnd", OAnimation: "oAnimationEnd", msAnimation: "MSAnimationEnd", animation: "animationend" },
        s = i[Modernizr.prefixed("animation")];
    o()
})()