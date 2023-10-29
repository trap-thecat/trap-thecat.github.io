var h = void 0,
    k = !0,
    n = null,
    p = !1;

function r() {
    return function() {}
}

function aa(a) {
    return function() {
        return this[a]
    }
}

function ca(a) {
    return function() {
        return a
    }
}
var u;

function da(a, b, c, d, e, f, g, j, l) {
    this.canvas = a;
    this.kc = a.getContext("2d");
    a.setAttribute("tabIndex", 0);
    a.focus();
    this.width = b;
    this.height = c;
    this.we = a.width;
    this.ve = a.height;
    this.ue = a.clientWidth;
    this.te = a.clientHeight;
    this.ye(b, c, a.width, a.height, a.clientWidth, a.clientHeight);
    this.sd = d;
    this.sd == n && (this.sd = {});
    this.Fc = e;
    this.Fc == n && (this.Fc = {});
    this.oj = f;
    this.Mg = g;
    this.Se = j;
    this.Of = l
}
da.prototype.ye = function(a, b, c, d, e, f) {
    var g;
    g = new w;
    g.scale(e / c, f / d);
    d = ea(g);
    c = Math.min(e / a, f / b);
    this.pc = new w;
    this.pc.translate((e - c * a) / 2, (f - c * b) / 2);
    this.pc.scale(c, c);
    this.Cg = ea(this.pc);
    this.U = this.pc.da();
    fa(this.U, d);
    this.hk = ea(this.U)
};
da.prototype.Jc = function(a) {
    var b;
    b = /\bMSIE\b\s*(\d+)\.\d+\b/.exec(navigator.userAgent);
    if (b != n && 9 >= b[1]) alert("Internet Explorer 9 or below is not supported, please update to version 10 or above."), b = p;
    else if (!this.Fc.allowRunInAndroidDefaultBrowser && /\bAndroid\b/.test(navigator.userAgent) && !/\bChrome\b/.test(navigator.userAgent) && !/\bFirefox\b/.test(navigator.userAgent)) alert("The default browser on Android is not supported, please download another browser such as Chrome, Firefox or Opera from Play Store."),
        b = p;
    else {
        try {
            new ArrayBuffer(0)
        } catch (c) {
            alert("This browser is not supported. Please use the latest version of Internet Explorer, Firefox, Chrome, Safari, or Opera.")
        }
        b = k
    }
    if (b)
        if ("http" != document.location.href.substr(0, 4) && alert("Loading from the local computer may or may not work, depending on the browser you are using and the security settings. If there are any problems, try using another web browser or loading from a web server."), this.pg = a, this.kc.save(), this.kc.fillStyle = "#000000", this.kc.fillRect(0,
                0, this.canvas.width, this.canvas.height), this.kc.restore(), this.Mg) {
            var d = this,
                e;
            !d.Of == n ? ga(d, p, e) : (a = function() {
                ha(d, k, e)
            }, b = function() {
                ha(d, p, e)
            }, e = new Image, e.onload = a, e.onerror = b, e.onabort = b, e.src = d.Of)
        } else {
            var f = this,
                g;
            f.Of == n ? ga(f, p, g) : (a = function() {
                ga(f, k, g)
            }, b = function() {
                ga(f, p, g)
            }, g = new Image, g.onload = a, g.onerror = b, g.onabort = b, g.src = f.Of)
        }
};

function ha(a, b, c) {
    var d, e, f, g, j;
    if (b) {
        b = function() {
            ga(a, k, g)
        };
        j = function() {
            ga(a, p, g)
        };
        d = document.createElement("canvas");
        d.width = c.width;
        d.height = c.height;
        d = d.getContext("2d");
        try {
            d.webkitImageSmoothingEnabled = p
        } catch (l) {}
        d.drawImage(c, 0, 0);
        d = d.getImageData(0, 0, c.width, c.height);
        c = Array(3 * c.width * c.height);
        for (e = f = 0; e < d.data.length; e += 4) c[f++] = d.data[e], c[f++] = d.data[e + 1], c[f++] = d.data[e + 2];
        for (d = 0; d < c.length;) {
            e = c[d++];
            if (0 == e) break;
            e = c[d++] << 24 | c[d++] << 16 | c[d++] << 8 | c[d++];
            f = c[d++] << 24 | c[d++] <<
                16 | c[d++] << 8 | c[d++];
            new ia(h, c, d, e);
            d += e;
            g = new Image;
            g.onload = b;
            g.onerror = j;
            g.onabort = j;
            g.src = "data:image/png;base64," + ja(new ia(h, c, d, f));
            d += f
        }
    } else ga(a, p, c)
}

function ga(a, b, c) {
    b && (c != n && 0 < c.width && 0 < c.height) && (a.mk = c, ka(a), a.lj = setInterval(function() {
        a.lg()
    }, 1));
    if (a.Se != n) {
        var d, e;
        if (".js" == a.Se.substr(0, a.Se.length - 3)) {
            try {
                d = new XMLHttpRequest
            } catch (f) {
                d = new ActiveXObject("Msxml2.XMLHTTP")
            }
            d.onreadystatechange = function() {
                4 == this.readyState && (window.eval(this.responseText), a.Ue())
            };
            d.open("GET", a.Se, k);
            d.send(n)
        } else e = new Image, e.onload = function() {
            var b, c, d, f;
            b = document.createElement("canvas");
            b.width = e.width;
            b.height = e.height;
            b = b.getContext("2d");
            try {
                b.webkitImageSmoothingEnabled = p
            } catch (q) {}
            b.drawImage(e, 0, 0);
            b = b.getImageData(0, 0, e.width, e.height);
            c = Array(3 * e.width * e.height);
            for (d = f = 0; d < b.data.length && 0 != b.data[d]; d += 4) {
                c[f++] = b.data[d];
                if (0 == b.data[d + 1]) break;
                c[f++] = b.data[d + 1];
                if (0 == b.data[d + 2]) break;
                c[f++] = b.data[d + 2]
            }
            b = String.od(new ia(h, c, 0, f));
            window.eval(b);
            a.Ue()
        }, e.src = a.Se
    } else a.Ue()
}

function ka(a) {
    a.kc.save();
    a.kc.transform(a.U.q, a.U.w, a.U.A, a.U.r, a.U.O, a.U.P);
    a.kc.drawImage(a.mk, 0, 0);
    a.kc.restore()
}
da.prototype.lg = function() {
    this.canvas.width == this.we && this.canvas.height == this.ve && this.canvas.clientWidth == this.ue && this.canvas.clientHeight == this.te || (this.ye(this.width, this.height, this.canvas.width, this.canvas.height, this.canvas.clientWidth, this.canvas.clientHeight), ka(this), this.we = this.canvas.width, this.ve = this.canvas.height, this.ue = this.canvas.clientWidth, this.te = this.canvas.clientHeight)
};
da.prototype.Ue = function() {
    var a = this;
    _assets.Hc = this.oj + "/assets/";
    _assets.Ue(function() {
        clearInterval(a.lj);
        (new la(a.canvas, a.width, a.height, a.sd, a.Fc)).Jc(a.pg)
    })
};

function na(a, b) {
    var c;
    c == h && (c = 1);
    c += 1;
    c == h && (c = 2147483647);
    var d = [],
        e, f, g;
    if ("" == a) c = [""];
    else {
        f = a;
        for (g = 0; g < c - 1; g++) {
            e = f.indexOf("#[YEAR]");
            if (-1 == e) break;
            d.push(f.substr(0, e));
            f = f.substr(e + 7)
        }
        d.push(f);
        c = d
    }
    return c.join(b)
}
String.prototype.substring = function(a, b) {
    a == h && (a = 0);
    b == h && (b = 2147483647);
    return this.substr(a, b - a)
};
String.od = function(a) {
    var b = "",
        c, d, e, f;
    for (f = 0; f < a.Ha.length; f++) c = a.Ha[f], 224 <= c ? (d = a.Ha[++f], e = a.Ha[++f], c = (c & 15) << 12 | (d & 63) << 6 | e & 63) : 127 < c && (d = a.Ha[++f], c = (c & 31) << 6 | d & 63), b += String.fromCharCode(c);
    return b
};

function ia(a, b, c, d) {
    if (a != h) this.Ha = a;
    else {
        a = Array(d);
        for (var e = 0; e < d; e++) a[e] = b[c + e];
        this.Ha = new Uint8Array(a)
    }
}
window._nogic_core_Bytes = ia;
ia.prototype.gd = function() {
    return this.Ha.length
};
ia.prototype.append = function(a) {
    var b = this.Ha.length + 1;
    b <= this.Ha.length || (b = new Uint8Array(b), b.set(this.Ha), this.Ha = b);
    this.Ha[this.Ha.length - 1] = a
};

function w(a, b, c, d, e, f) {
    a == h && (a = 1);
    b == h && (b = 0);
    c == h && (c = 0);
    d == h && (d = 1);
    e == h && (e = 0);
    f == h && (f = 0);
    this.q = a;
    this.w = b;
    this.A = c;
    this.r = d;
    this.O = e;
    this.P = f;
    return this
}
window._nogic_math_Matrix = w;

function oa(a) {
    return a.O
}

function pa(a) {
    return a.P
}
u = w.prototype;
u.Na = function(a) {
    var b = this.w * a.q + this.r * a.w,
        c = this.q * a.A + this.A * a.r,
        d = this.w * a.A + this.r * a.r,
        e = this.q * a.O + this.A * a.P + this.O,
        f = this.w * a.O + this.r * a.P + this.P;
    this.q = this.q * a.q + this.A * a.w;
    this.w = b;
    this.A = c;
    this.r = d;
    this.O = e;
    this.P = f
};

function fa(a, b) {
    var c = b.w * a.q + b.r * a.w,
        d = b.q * a.A + b.A * a.r,
        e = b.w * a.A + b.r * a.r,
        f = b.q * a.O + b.A * a.P + b.O,
        g = b.w * a.O + b.r * a.P + b.P;
    a.q = b.q * a.q + b.A * a.w;
    a.w = c;
    a.A = d;
    a.r = e;
    a.O = f;
    a.P = g
}
u.translate = function(a, b) {
    this.Na(new w(1, 0, 0, 1, a, b))
};
u.rotate = function(a) {
    var b = Math.sin(a);
    a = Math.cos(a);
    this.Na(new w(a, b, -b, a, 0, 0))
};
u.scale = function(a, b) {
    this.Na(new w(a, 0, 0, b, 0, 0))
};

function ea(a) {
    var b = a.q * a.r - a.w * a.A,
        c;
    if (0 == b) return n;
    c = new w;
    c.q = a.r / b;
    c.w = -a.w / b;
    c.A = -a.A / b;
    c.r = a.q / b;
    c.O = (a.A * a.P - a.r * a.O) / b;
    c.P = (a.w * a.O - a.q * a.P) / b;
    return c
}
u.G = function(a) {
    return this.q != a.q || this.w != a.w || this.A != a.A || this.r != a.r || this.O != a.O || this.P != a.P ? p : k
};
u.da = function() {
    return new w(this.q, this.w, this.A, this.r, this.O, this.P)
};
u.transform = function(a) {
    return new y(a.x * this.q + a.y * this.A + this.O, a.x * this.w + a.y * this.r + this.P)
};
u.toString = function() {
    return "Matrix(" + this.q + " " + this.w + " " + this.A + " " + this.r + " " + this.O + " " + this.P + ")"
};
window._nogic_encode_Base64Encoder = r();
var qa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");

function ja(a) {
    var b, c, d, e, f, g;
    b = "";
    c = a.gd();
    for (g = 0; g < c; g += 3) d = a.Ha[g], e = g + 1 < c ? a.Ha[g + 1] : 0, f = g + 2 < c ? a.Ha[g + 2] : 0, b += qa[d >> 2], b += qa[(d & 3) << 4 | e >> 4], b += g + 1 < c ? qa[(e & 15) << 2 | f >> 6] : "=", b += g + 2 < c ? qa[f & 63] : "=";
    return b
}
window._com_novelgames_spgames_mousetrap_Main_run = function(a, b, c) {
    var d;
    d = document.getElementsByTagName("script");
    d = /(.*)\/js\//.exec(d[d.length - 2].src)[1];
    (new da(a, 600, 400, b, c, d, k, d + "/assets/a.png", d + "/assets/b.png")).Jc(function() {
        z(ra, new sa)
    })
};