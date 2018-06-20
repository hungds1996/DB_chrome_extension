! function (g, A) {
    "use strict";
    var I = "model",
        C = "name",
        i = "type",
        e = "vendor",
        n = "version",
        t = "mobile",
        o = "tablet",
        r = {
            extend: function (g, A) {
                var I = {};
                for (var C in g) A[C] && A[C].length % 2 == 0 ? I[C] = A[C].concat(g[C]) : I[C] = g[C];
                return I
            },
            has: function (g, A) {
                return "string" == typeof g && -1 !== A.toLowerCase().indexOf(g.toLowerCase())
            },
            lowerize: function (g) {
                return g.toLowerCase()
            },
            major: function (g) {
                return "string" == typeof g ? g.replace(/[^\d\.]/g, "").split(".")[0] : void 0
            },
            trim: function (g) {
                return g.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        },
        a = {
            rgx: function (g, A) {
                for (var I, C, i, e, n, t, o = 0; o < A.length && !n;) {
                    var r = A[o],
                        a = A[o + 1];
                    for (I = C = 0; I < r.length && !n;)
                        if (n = r[I++].exec(g))
                            for (i = 0; i < a.length; i++) t = n[++C], "object" == typeof (e = a[i]) && e.length > 0 ? 2 == e.length ? "function" == typeof e[1] ? this[e[0]] = e[1].call(this, t) : this[e[0]] = e[1] : 3 == e.length ? "function" != typeof e[1] || e[1].exec && e[1].test ? this[e[0]] = t ? t.replace(e[1], e[2]) : void 0 : this[e[0]] = t ? e[1].call(this, t, e[2]) : void 0 : 4 == e.length && (this[e[0]] = t ? e[3].call(this, t.replace(e[1], e[2])) : void 0) : this[e] = t || void 0;
                    o += 2
                }
            },
            str: function (g, A) {
                for (var I in A)
                    if ("object" == typeof A[I] && A[I].length > 0) {
                        for (var C = 0; C < A[I].length; C++)
                            if (r.has(A[I][C], g)) return "?" === I ? void 0 : I
                    } else if (r.has(A[I], g)) return "?" === I ? void 0 : I;
                return g
            }
        },
        s = {
            browser: {
                oldsafari: {
                    version: {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }
                }
            },
            device: {
                amazon: {
                    model: {
                        "Fire Phone": ["SD", "KF"]
                    }
                },
                sprint: {
                    model: {
                        "Evo Shift 4G": "7373KT"
                    },
                    vendor: {
                        HTC: "APA",
                        Sprint: "Sprint"
                    }
                }
            },
            os: {
                windows: {
                    version: {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    }
                }
            }
        },
        d = {
            browser: [
                [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                [C, n],
                [/(opios)[\/\s]+([\w\.]+)/i],
                [
                    [C, "Opera Mini"], n
                ],
                [/\s(opr)\/([\w\.]+)/i],
                [
                    [C, "Opera"], n
                ],
                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],
                [C, n],
                [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                [
                    [C, "IE"], n
                ],
                [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],
                [
                    [C, "Edge"], n
                ],
                [/(yabrowser)\/([\w\.]+)/i],
                [
                    [C, "Yandex"], n
                ],
                [/(puffin)\/([\w\.]+)/i],
                [
                    [C, "Puffin"], n
                ],
                [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                [
                    [C, "UCBrowser"], n
                ],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [
                    [C, /_/g, " "], n
                ],
                [/(micromessenger)\/([\w\.]+)/i],
                [
                    [C, "WeChat"], n
                ],
                [/(qqbrowserlite)\/([\w\.]+)/i],
                [C, n],
                [/(QQ)\/([\d\.]+)/i],
                [C, n],
                [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                [C, n],
                [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
                [C, n],
                [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                [C, n],
                [/(MetaSr)[\/\s]?([\w\.]+)/i],
                [C],
                [/(LBBROWSER)/i],
                [C],
                [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                [n, [C, "MIUI Browser"]],
                [/;fbav\/([\w\.]+);/i],
                [n, [C, "Facebook"]],
                [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                [n, [C, "Chrome Headless"]],
                [/\swv\).+(chrome)\/([\w\.]+)/i],
                [
                    [C, /(.+)/, "$1 WebView"], n
                ],
                [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                [
                    [C, /(.+(?:g|us))(.+)/, "$1 $2"], n
                ],
                [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                [n, [C, "Android Browser"]],
                [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                [C, n],
                [/(dolfin)\/([\w\.]+)/i],
                [
                    [C, "Dolphin"], n
                ],
                [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                [
                    [C, "Chrome"], n
                ],
                [/(coast)\/([\w\.]+)/i],
                [
                    [C, "Opera Coast"], n
                ],
                [/fxios\/([\w\.-]+)/i],
                [n, [C, "Firefox"]],
                [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                [n, [C, "Mobile Safari"]],
                [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                [n, C],
                [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                [
                    [C, "GSA"], n
                ],
                [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                [C, [n, a.str, s.browser.oldsafari.version]],
                [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                [C, n],
                [/(navigator|netscape)\/([\w\.-]+)/i],
                [
                    [C, "Netscape"], n
                ],
                [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                [C, n]
            ],
            cpu: [
                [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                [
                    ["architecture", "amd64"]
                ],
                [/(ia32(?=;))/i],
                [
                    ["architecture", r.lowerize]
                ],
                [/((?:i[346]|x)86)[;\)]/i],
                [
                    ["architecture", "ia32"]
                ],
                [/windows\s(ce|mobile);\sppc;/i],
                [
                    ["architecture", "arm"]
                ],
                [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                [
                    ["architecture", /ower/, "", r.lowerize]
                ],
                [/(sun4\w)[;\)]/i],
                [
                    ["architecture", "sparc"]
                ],
                [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                [
                    ["architecture", r.lowerize]
                ]
            ],
            device: [
                [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                [I, e, [i, o]],
                [/applecoremedia\/[\w\.]+ \((ipad)/],
                [I, [e, "Apple"],
                    [i, o]
                ],
                [/(apple\s{0,1}tv)/i],
                [
                    [I, "Apple TV"],
                    [e, "Apple"]
                ],
                [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                [e, I, [i, o]],
                [/(kf[A-z]+)\sbuild\/.+silk\//i],
                [I, [e, "Amazon"],
                    [i, o]
                ],
                [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                [
                    [I, a.str, s.device.amazon.model],
                    [e, "Amazon"],
                    [i, t]
                ],
                [/\((ip[honed|\s\w*]+);.+(apple)/i],
                [I, e, [i, t]],
                [/\((ip[honed|\s\w*]+);/i],
                [I, [e, "Apple"],
                    [i, t]
                ],
                [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                [e, I, [i, t]],
                [/\(bb10;\s(\w+)/i],
                [I, [e, "BlackBerry"],
                    [i, t]
                ],
                [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                [I, [e, "Asus"],
                    [i, o]
                ],
                [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                [
                    [e, "Sony"],
                    [I, "Xperia Tablet"],
                    [i, o]
                ],
                [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                [I, [e, "Sony"],
                    [i, t]
                ],
                [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                [e, I, [i, "console"]],
                [/android.+;\s(shield)\sbuild/i],
                [I, [e, "Nvidia"],
                    [i, "console"]
                ],
                [/(playstation\s[34portablevi]+)/i],
                [I, [e, "Sony"],
                    [i, "console"]
                ],
                [/(sprint\s(\w+))/i],
                [
                    [e, a.str, s.device.sprint.vendor],
                    [I, a.str, s.device.sprint.model],
                    [i, t]
                ],
                [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                [e, I, [i, o]],
                [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                [e, [I, /_/g, " "],
                    [i, t]
                ],
                [/(nexus\s9)/i],
                [I, [e, "HTC"],
                    [i, o]
                ],
                [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                [I, [e, "Huawei"],
                    [i, t]
                ],
                [/(microsoft);\s(lumia[\s\w]+)/i],
                [e, I, [i, t]],
                [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                [I, [e, "Microsoft"],
                    [i, "console"]
                ],
                [/(kin\.[onetw]{3})/i],
                [
                    [I, /\./g, " "],
                    [e, "Microsoft"],
                    [i, t]
                ],
                [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                [I, [e, "Motorola"],
                    [i, t]
                ],
                [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                [I, [e, "Motorola"],
                    [i, o]
                ],
                [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                [
                    [e, r.trim],
                    [I, r.trim],
                    [i, "smarttv"]
                ],
                [/hbbtv.+maple;(\d+)/i],
                [
                    [I, /^/, "SmartTV"],
                    [e, "Samsung"],
                    [i, "smarttv"]
                ],
                [/\(dtv[\);].+(aquos)/i],
                [I, [e, "Sharp"],
                    [i, "smarttv"]
                ],
                [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                [
                    [e, "Samsung"], I, [i, o]
                ],
                [/smart-tv.+(samsung)/i],
                [e, [i, "smarttv"], I],
                [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                [
                    [e, "Samsung"], I, [i, t]
                ],
                [/sie-(\w*)/i],
                [I, [e, "Siemens"],
                    [i, t]
                ],
                [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                [
                    [e, "Nokia"], I, [i, t]
                ],
                [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                [I, [e, "Acer"],
                    [i, o]
                ],
                [/android.+([vl]k\-?\d{3})\s+build/i],
                [I, [e, "LG"],
                    [i, o]
                ],
                [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                [
                    [e, "LG"], I, [i, o]
                ],
                [/(lg) netcast\.tv/i],
                [e, I, [i, "smarttv"]],
                [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                [I, [e, "LG"],
                    [i, t]
                ],
                [/android.+(ideatab[a-z0-9\-\s]+)/i],
                [I, [e, "Lenovo"],
                    [i, o]
                ],
                [/linux;.+((jolla));/i],
                [e, I, [i, t]],
                [/((pebble))app\/[\d\.]+\s/i],
                [e, I, [i, "wearable"]],
                [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                [e, I, [i, t]],
                [/crkey/i],
                [
                    [I, "Chromecast"],
                    [e, "Google"]
                ],
                [/android.+;\s(glass)\s\d/i],
                [I, [e, "Google"],
                    [i, "wearable"]
                ],
                [/android.+;\s(pixel c)\s/i],
                [I, [e, "Google"],
                    [i, o]
                ],
                [/android.+;\s(pixel xl|pixel)\s/i],
                [I, [e, "Google"],
                    [i, t]
                ],
                [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                [
                    [I, /_/g, " "],
                    [e, "Xiaomi"],
                    [i, t]
                ],
                [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                [
                    [I, /_/g, " "],
                    [e, "Xiaomi"],
                    [i, o]
                ],
                [/android.+;\s(m[1-5]\snote)\sbuild/i],
                [I, [e, "Meizu"],
                    [i, o]
                ],
                [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
                [I, [e, "OnePlus"],
                    [i, t]
                ],
                [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                [I, [e, "RCA"],
                    [i, o]
                ],
                [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                [I, [e, "Dell"],
                    [i, o]
                ],
                [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                [I, [e, "Verizon"],
                    [i, o]
                ],
                [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                [
                    [e, "Barnes & Noble"], I, [i, o]
                ],
                [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                [I, [e, "NuVision"],
                    [i, o]
                ],
                [/android.+;\s(k88)\sbuild/i],
                [I, [e, "ZTE"],
                    [i, o]
                ],
                [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                [I, [e, "Swiss"],
                    [i, t]
                ],
                [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                [I, [e, "Swiss"],
                    [i, o]
                ],
                [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                [I, [e, "Zeki"],
                    [i, o]
                ],
                [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                [
                    [e, "Dragon Touch"], I, [i, o]
                ],
                [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                [I, [e, "Insignia"],
                    [i, o]
                ],
                [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                [I, [e, "NextBook"],
                    [i, o]
                ],
                [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                [
                    [e, "Voice"], I, [i, t]
                ],
                [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                [
                    [e, "LvTel"], I, [i, t]
                ],
                [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                [I, [e, "Envizen"],
                    [i, o]
                ],
                [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                [e, I, [i, o]],
                [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                [I, [e, "MachSpeed"],
                    [i, o]
                ],
                [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                [e, I, [i, o]],
                [/android.+[;\/]\s*TU_(1491)\s+build/i],
                [I, [e, "Rotor"],
                    [i, o]
                ],
                [/android.+(KS(.+))\s+build/i],
                [I, [e, "Amazon"],
                    [i, o]
                ],
                [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                [e, I, [i, o]],
                [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                [
                    [i, r.lowerize], e, I
                ],
                [/(android[\w\.\s\-]{0,9});.+build/i],
                [I, [e, "Generic"]]
            ],
            engine: [
                [/windows.+\sedge\/([\w\.]+)/i],
                [n, [C, "EdgeHTML"]],
                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                [C, n],
                [/rv\:([\w\.]{1,9}).+(gecko)/i],
                [n, C]
            ],
            os: [
                [/microsoft\s(windows)\s(vista|xp)/i],
                [C, n],
                [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                [C, [n, a.str, s.os.windows.version]],
                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                [
                    [C, "Windows"],
                    [n, a.str, s.os.windows.version]
                ],
                [/\((bb)(10);/i],
                [
                    [C, "BlackBerry"], n
                ],
                [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i],
                [C, n],
                [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                [
                    [C, "Symbian"], n
                ],
                [/\((series40);/i],
                [C],
                [/mozilla.+\(mobile;.+gecko.+firefox/i],
                [
                    [C, "Firefox OS"], n
                ],
                [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                [C, n],
                [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                [
                    [C, "Chromium OS"], n
                ],
                [/(sunos)\s?([\w\.\d]*)/i],
                [
                    [C, "Solaris"], n
                ],
                [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                [C, n],
                [/(haiku)\s(\w+)/i],
                [C, n],
                [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                [
                    [n, /_/g, "."],
                    [C, "iOS"]
                ],
                [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                [
                    [C, "Mac OS"],
                    [n, /_/g, "."]
                ],
                [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i],
                [C, n]
            ]
        },
        l = function (A, I) {
            if ("object" == typeof A && (I = A, A = void 0), !(this instanceof l)) return new l(A, I).getResult();
            var C = A || (g && g.navigator && g.navigator.userAgent ? g.navigator.userAgent : ""),
                i = I ? r.extend(d, I) : d;
            return this.getBrowser = function () {
                var g = {
                    name: void 0,
                    version: void 0
                };
                return a.rgx.call(g, C, i.browser), g.major = r.major(g.version), g
            }, this.getCPU = function () {
                var g = {
                    architecture: void 0
                };
                return a.rgx.call(g, C, i.cpu), g
            }, this.getDevice = function () {
                var g = {
                    vendor: void 0,
                    model: void 0,
                    type: void 0
                };
                return a.rgx.call(g, C, i.device), g
            }, this.getEngine = function () {
                var g = {
                    name: void 0,
                    version: void 0
                };
                return a.rgx.call(g, C, i.engine), g
            }, this.getOS = function () {
                var g = {
                    name: void 0,
                    version: void 0
                };
                return a.rgx.call(g, C, i.os), g
            }, this.getResult = function () {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            }, this.getUA = function () {
                return C
            }, this.setUA = function (g) {
                return C = g, this
            }, this
        };
    l.VERSION = "0.7.18", l.BROWSER = {
        NAME: C,
        MAJOR: "major",
        VERSION: n
    }, l.CPU = {
        ARCHITECTURE: "architecture"
    }, l.DEVICE = {
        MODEL: I,
        VENDOR: e,
        TYPE: i,
        CONSOLE: "console",
        MOBILE: t,
        SMARTTV: "smarttv",
        TABLET: o,
        WEARABLE: "wearable",
        EMBEDDED: "embedded"
    }, l.ENGINE = {
        NAME: C,
        VERSION: n
    }, l.OS = {
        NAME: C,
        VERSION: n
    }, "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = l), exports.UAParser = l) : "function" == typeof define && define.amd ? define(function () {
        return l
    }) : g && (g.UAParser = l);
    var c = g && (g.jQuery || g.Zepto);
    if (void 0 !== c) {
        var u = new l;
        c.ua = u.getResult(), c.ua.get = function () {
            return u.getUA()
        }, c.ua.set = function (g) {
            u.setUA(g);
            var A = u.getResult();
            for (var I in A) c.ua[I] = A[I]
        }
    }
}("object" == typeof window ? window : this),
function (g) {
    var A = g.createElement("style");
    A.type = "text/css", A.innerHTML = ".db-btn-designit,.db-btn-redesign{-moz-box-shadow:0 10px 14px -7px #000;-webkit-box-shadow:0 10px 14px -7px #000;background-color:#0098fe}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.db-btn-designit{box-shadow:0 10px 14px -7px #000;font-family:Arial;-moz-border-radius:3px;border-radius:3px;display:inline-block;cursor:pointer;color:#fff;font-size:13px;font-weight:700;padding:0 10px 0 30px;height:30px;line-height:32px;z-index:99999;text-decoration:none;-moz-transition:all ease .3s;-o-transition:all ease .3s;-webkit-transition:all ease .3s;transition:all ease .3s;background-image:url(data:image/png;base64,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/GMzLdsAADvqaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzExMSA3OS4xNTgzMjUsIDIwMTUvMDkvMTAtMDE6MTA6MjAgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxNi0wNC0xNVQxMzozNjo1MyswNzowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTYtMDQtMTVUMTQ6MzE6MDUrMDc6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE2LTA0LTE1VDE0OjMxOjA1KzA3OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDo5MjU4YjVmNi03ZjI3LWQyNGMtYmYyNi02N2FlZDY3ZTc2Nzc8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2ZGIzZmY3ZC0wMmQ0LTExZTYtOTg0ZC1mMzU1ZWE5OGUxNGU8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDpjM2QwMjFlNC02NTNhLWU5NDQtODFjMS01Njg0OGE2ZTE4N2U8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6YzNkMDIxZTQtNjUzYS1lOTQ0LTgxYzEtNTY4NDhhNmUxODdlPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTA0LTE1VDEzOjM2OjUzKzA3OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmJjN2I1NTg2LTExNDQtMzM0Ni04ZWFkLTIyOWFhZDQxZmZiOTwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNi0wNC0xNVQxMzozNjo1MyswNzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo5MjU4YjVmNi03ZjI3LWQyNGMtYmYyNi02N2FlZDY3ZTc2Nzc8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTYtMDQtMTVUMTQ6MzE6MDUrMDc6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8cGhvdG9zaG9wOklDQ1Byb2ZpbGU+c1JHQiBJRUM2MTk2Ni0yLjE8L3Bob3Rvc2hvcDpJQ0NQcm9maWxlPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yMDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+1i5r2gAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAACoUlEQVR42pSVy0tUYRjGf3NmvF8iL6ndoBKisMuiFkE3Kiq6aWXRokWbaNtfUNCiC5VKBEEuWnWBMLNcFEFQSheMUYlEY8qcxPHajDnN7eg8LRrldEYtH/g273Pe3wff973PcUhiGuUB24BDwEZgYaLeB7QAT4BmYCipU5J9HZHUqn/rk6Rj9n47rEpmTHEzqjmoeiZgjSSZnS0K37usOarGDqycdMyuDwocXSjT/XKu0GOSMIAc4NLkmRrZ81AkSKyuBiIh5qCLQI4BHARKp4DOFFJy5sOQF2JjAAwGTbyjUUJmfDZgKXDIlQBOKb5gKel7T2G8eURLb4javh94un1EJkRhVgrlq/M4ub6AVKdjOugBF7DWWumKm3RureBwRjr1777yMLCUVZki3WXwaTBM07ceegJRzu1YhNORBF3rAkqsFf/oCGe9H9mw/Tg7e9JYZmSwe0UW2alO3H0hqpr7uPm2nzVFmVSW5dmBJUjyW6+qO+iXs+G6Kt3Ppn/NA2GtvN6myrufFYxO2G2/AfisW4wD+a40vowOMTweTjqk1QvSWb9kMa++pzIQnLDbPgNot1YcgP7MJPGJ5FuNC7YUutlT8JgMY8xutxtAo7VSlJZJWW4BHYEBvKGkBhzxMU4XnuHOxvOUZEXsdqORSA7PZCXblcr+4uVEzQhXPR8YiYUtQQKR/mqC/m7M3BOQUmyFeYCnSaMnSSOxsDa/vi8eXNCm13W64WnVsK9W8c/7NNyM/O5lGg93TDt61nCotrodP0e0s+mBqLslV/1VtTTlSu+Rv7VUscDzf4bD5PorZn6ZUd3v/aYrXW/V670mDd/WePS7HXZ5tjxEUoWktv9Il9bEt3/1O2b4BeQDu4ByYJ1lmnyJZ9YAvAB+2Bt/DwBjORDN8Mr1IAAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:5px 5px}.db-btn-designit:hover{background-color:#37acfb;color:#fff;text-decoration:none}.db-btn-designit:active{margin-top:1px}.db-overlay{padding:0;margin:0;background-color:rgba(0,0,0,.5);position:fixed;top:0;left:0;bottom:0;right:0;z-index:999999;-moz-transition:all ease .3s;-o-transition:all ease .3s;-webkit-transition:all ease .3s;transition:all ease .3s;display:none}.db-lightbox{position:fixed;top:30px;left:20px;right:20px;background-color:#fff;z-index:99999;bottom:20px;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;overflow:hidden}.db-close-lightbox{width:30px;height:30px;display:block;line-height:30px;font-size:26px;color:#eee;-moz-transition:all ease .2s;-o-transition:all ease .2s;-webkit-transition:all ease .2s;transition:all ease .2s;position:absolute;top:3px;text-align:center;font-family:Arial;right:10px}.db-load,.db-loading{top:0;left:0;bottom:0;z-index:999;position:absolute}.db-close-lightbox:hover{cursor:pointer;color:#fff;-moz-transform:rotate(180deg);-webkit-transform:rotate(180deg);-o-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.db-lightbox iframe{border:none;width:100%;height:100%}.db-loading{right:0;background-color:#f5f5f5}.db-load{right:0;background-color:rgba(0,0,0,.6);-moz-transition:all ease .3s;-o-transition:all ease .3s;-webkit-transition:all ease .3s;transition:all ease .3s}.inner-circles-loader:not(:required),.large.inner-circles-loader:not(:required){background:rgba(2,188,155,.7);overflow:hidden;text-indent:-9999px;-webkit-mask-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);border-radius:50%}.db-load .db-load-img{position:absolute;top:50%;left:50%;margin:-25px 0 0 -25px;display:block}.inner-circles-loader:not(:required){-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);position:relative;display:inline-block;width:50px;height:50px}.inner-circles-loader:not(:required):after,.inner-circles-loader:not(:required):before{content:'';position:absolute;top:0;display:inline-block;width:50px;height:50px;border-radius:50%}.large.inner-circles-loader:not(:required){-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);position:relative;display:inline-block;width:90px;height:90px}.large.inner-circles-loader:not(:required):after,.large.inner-circles-loader:not(:required):before{content:'';position:absolute;top:0;display:inline-block;width:90px;height:90px;border-radius:50%}.inner-circles-loader:not(:required):before{-moz-animation:inner-circles-loader 3s infinite;-webkit-animation:inner-circles-loader 3s infinite;animation:inner-circles-loader 3s infinite;-moz-transform-origin:0 50%;-ms-transform-origin:0 50%;-webkit-transform-origin:0 50%;transform-origin:0 50%;left:0;background:#c7efcf}.inner-circles-loader:not(:required):after{-moz-animation:inner-circles-loader 3s .2s reverse infinite;-webkit-animation:inner-circles-loader 3s .2s reverse infinite;animation:inner-circles-loader 3s .2s reverse infinite;-moz-transform-origin:100% 50%;-ms-transform-origin:100% 50%;-webkit-transform-origin:100% 50%;transform-origin:100% 50%;right:0;background:#eef5db;background-color:rgba(44,151,221,.7)}@-moz-keyframes inner-circles-loader{0%,100%{-moz-transform:rotate(0);transform:rotate(0)}50%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes inner-circles-loader{0%,100%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes inner-circles-loader{0%,100%{-moz-transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);transform:rotate(0)}50%{-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.inner-circles-loader.large{position:absolute!important;top:50%;left:50%;margin:-50px 0 0 -50px}", g.getElementsByTagName("head")[0].appendChild(A)
}(document),
function (g) {
    "use strict";

    function A(g) {
        if ("string" != typeof g && (g = String(g)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(g)) throw new TypeError("Invalid character in header field name");
        return g.toLowerCase()
    }

    function I(g) {
        return "string" != typeof g && (g = String(g)), g
    }

    function C(g) {
        var A = {
            next: function () {
                var A = g.shift();
                return {
                    done: void 0 === A,
                    value: A
                }
            }
        };
        return m.iterable && (A[Symbol.iterator] = function () {
            return A
        }), A
    }

    function i(g) {
        this.map = {}, g instanceof i ? g.forEach(function (g, A) {
            this.append(A, g)
        }, this) : g && Object.getOwnPropertyNames(g).forEach(function (A) {
            this.append(A, g[A])
        }, this)
    }

    function e(g) {
        if (g.bodyUsed) return Promise.reject(new TypeError("Already read"));
        g.bodyUsed = !0
    }

    function n(g) {
        return new Promise(function (A, I) {
            g.onload = function () {
                A(g.result)
            }, g.onerror = function () {
                I(g.error)
            }
        })
    }

    function t(g) {
        var A = new FileReader,
            I = n(A);
        return A.readAsArrayBuffer(g), I
    }

    function o(g) {
        var A = new FileReader,
            I = n(A);
        return A.readAsText(g), I
    }

    function r(g) {
        for (var A = new Uint8Array(g), I = new Array(A.length), C = 0; C < A.length; C++) I[C] = String.fromCharCode(A[C]);
        return I.join("")
    }

    function a(g) {
        if (g.slice) return g.slice(0);
        var A = new Uint8Array(g.byteLength);
        return A.set(new Uint8Array(g)), A.buffer
    }

    function s() {
        return this.bodyUsed = !1, this._initBody = function (g) {
            if (this._bodyInit = g, g)
                if ("string" == typeof g) this._bodyText = g;
                else if (m.blob && Blob.prototype.isPrototypeOf(g)) this._bodyBlob = g;
            else if (m.formData && FormData.prototype.isPrototypeOf(g)) this._bodyFormData = g;
            else if (m.searchParams && URLSearchParams.prototype.isPrototypeOf(g)) this._bodyText = g.toString();
            else if (m.arrayBuffer && m.blob && w(g)) this._bodyArrayBuffer = a(g.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
            else {
                if (!m.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(g) && !h(g)) throw new Error("unsupported BodyInit type");
                this._bodyArrayBuffer = a(g)
            } else this._bodyText = "";
            this.headers.get("content-type") || ("string" == typeof g ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : m.searchParams && URLSearchParams.prototype.isPrototypeOf(g) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, m.blob && (this.blob = function () {
            var g = e(this);
            if (g) return g;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function () {
            return this._bodyArrayBuffer ? e(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(t)
        }), this.text = function () {
            var g = e(this);
            if (g) return g;
            if (this._bodyBlob) return o(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(r(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, m.formData && (this.formData = function () {
            return this.text().then(c)
        }), this.json = function () {
            return this.text().then(JSON.parse)
        }, this
    }

    function d(g) {
        var A = g.toUpperCase();
        return p.indexOf(A) > -1 ? A : g
    }

    function l(g, A) {
        var I = (A = A || {}).body;
        if ("string" == typeof g) this.url = g;
        else {
            if (g.bodyUsed) throw new TypeError("Already read");
            this.url = g.url, this.credentials = g.credentials, A.headers || (this.headers = new i(g.headers)), this.method = g.method, this.mode = g.mode, I || null === g._bodyInit || (I = g._bodyInit, g.bodyUsed = !0)
        }
        if (this.credentials = A.credentials || this.credentials || "omit", !A.headers && this.headers || (this.headers = new i(A.headers)), this.method = d(A.method || this.method || "GET"), this.mode = A.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && I) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(I)
    }

    function c(g) {
        var A = new FormData;
        return g.trim().split("&").forEach(function (g) {
            if (g) {
                var I = g.split("="),
                    C = I.shift().replace(/\+/g, " "),
                    i = I.join("=").replace(/\+/g, " ");
                A.append(decodeURIComponent(C), decodeURIComponent(i))
            }
        }), A
    }

    function u(g) {
        var A = new i;
        return g.split(/\r?\n/).forEach(function (g) {
            var I = g.split(":"),
                C = I.shift().trim();
            if (C) {
                var i = I.join(":").trim();
                A.append(C, i)
            }
        }), A
    }

    function b(g, A) {
        A || (A = {}), this.type = "default", this.status = "status" in A ? A.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in A ? A.statusText : "OK", this.headers = new i(A.headers), this.url = A.url || "", this._initBody(g)
    }
    if (!g.fetch) {
        var m = {
            searchParams: "URLSearchParams" in g,
            iterable: "Symbol" in g && "iterator" in Symbol,
            blob: "FileReader" in g && "Blob" in g && function () {
                try {
                    return new Blob, !0
                } catch (g) {
                    return !1
                }
            }(),
            formData: "FormData" in g,
            arrayBuffer: "ArrayBuffer" in g
        };
        if (m.arrayBuffer) var f = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            w = function (g) {
                return g && DataView.prototype.isPrototypeOf(g)
            },
            h = ArrayBuffer.isView || function (g) {
                return g && f.indexOf(Object.prototype.toString.call(g)) > -1
            };
        i.prototype.append = function (g, C) {
            g = A(g), C = I(C);
            var i = this.map[g];
            this.map[g] = i ? i + "," + C : C
        }, i.prototype.delete = function (g) {
            delete this.map[A(g)]
        }, i.prototype.get = function (g) {
            return g = A(g), this.has(g) ? this.map[g] : null
        }, i.prototype.has = function (g) {
            return this.map.hasOwnProperty(A(g))
        }, i.prototype.set = function (g, C) {
            this.map[A(g)] = I(C)
        }, i.prototype.forEach = function (g, A) {
            for (var I in this.map) this.map.hasOwnProperty(I) && g.call(A, this.map[I], I, this)
        }, i.prototype.keys = function () {
            var g = [];
            return this.forEach(function (A, I) {
                g.push(I)
            }), C(g)
        }, i.prototype.values = function () {
            var g = [];
            return this.forEach(function (A) {
                g.push(A)
            }), C(g)
        }, i.prototype.entries = function () {
            var g = [];
            return this.forEach(function (A, I) {
                g.push([I, A])
            }), C(g)
        }, m.iterable && (i.prototype[Symbol.iterator] = i.prototype.entries);
        var p = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        l.prototype.clone = function () {
            return new l(this, {
                body: this._bodyInit
            })
        }, s.call(l.prototype), s.call(b.prototype), b.prototype.clone = function () {
            return new b(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new i(this.headers),
                url: this.url
            })
        }, b.error = function () {
            var g = new b(null, {
                status: 0,
                statusText: ""
            });
            return g.type = "error", g
        };
        var D = [301, 302, 303, 307, 308];
        b.redirect = function (g, A) {
            if (-1 === D.indexOf(A)) throw new RangeError("Invalid status code");
            return new b(null, {
                status: A,
                headers: {
                    location: g
                }
            })
        }, g.Headers = i, g.Request = l, g.Response = b, g.fetch = function (g, A) {
            return new Promise(function (I, C) {
                var i = new l(g, A),
                    e = new XMLHttpRequest;
                e.onload = function () {
                    var g = {
                        status: e.status,
                        statusText: e.statusText,
                        headers: u(e.getAllResponseHeaders() || "")
                    };
                    g.url = "responseURL" in e ? e.responseURL : g.headers.get("X-Request-URL");
                    var A = "response" in e ? e.response : e.responseText;
                    I(new b(A, g))
                }, e.onerror = function () {
                    C(new TypeError("Network request failed"))
                }, e.ontimeout = function () {
                    C(new TypeError("Network request failed"))
                }, e.open(i.method, i.url, !0), "include" === i.credentials && (e.withCredentials = !0), "responseType" in e && m.blob && (e.responseType = "blob"), i.headers.forEach(function (g, A) {
                    e.setRequestHeader(A, g)
                }), e.send(void 0 === i._bodyInit ? null : i._bodyInit)
            })
        }, g.fetch.polyfill = !0
    }
}("undefined" != typeof self ? self : this),
function (g, A) {
    var I = null,
        C = {};
    "object" != typeof A || "object" != typeof A.DBSDK || "object" != typeof A.DBSDK.API || (A.DBSDK.API.host, 0) || (I = A.DBSDK.API.host), A.DBSDK = {
        API: {
            app_id: "",
            scheme: "https",
            host: I || "www.designbold.com",
            path: "design-it/create"
        },
        error: ""
    }, DBSDK.getParameterByName = function (A, I) {
        I || (I = g.getElementById("db-js-sdk").getAttribute("src")), A = A.replace(/[\[\]]/g, "\\$&");
        var C = new RegExp("[#&]" + A + "(=([^&]*)|&|$)").exec(I);
        return C ? C[2] ? decodeURIComponent(C[2].replace(/\+/g, " ")) : "" : null
    }, DBSDK.g = function (g, A, I) {
        if (isNaN(Number(g)) || isNaN(Number(A))) C = "Please enter a valid width / height number";
        else if ("mm" === I) {
            if (g < 13.2 || g > 1058.3 || A < 13.2 || A > 1058.3) C = "Width and height must has value between of 13.2 and 1058.3 milimeters"
        } else if ("cm" === I) {
            if (g < 1.32 || g > 105.83 || A < 1.32 || A > 105.83) C = "Width and height must has value between of 1.32 and 105.83 centimeters"
        } else if ("inch" === I || "in" === I) {
            if (g < .52 || g > 41.67 || A < .52 || A > 41.67) C = "Width and height must has value between of 0.52 and 41.67 inches"
        } else if (g < 50 || g > 4e3 || A < 50 || A > 4e3) var C = "Width and height must has value between of 50 and 4000 pixels";
        return C
    }, DBSDK.API_CREATE = DBSDK.API.scheme + "://" + DBSDK.API.host + "/" + DBSDK.API.path, DBSDK.BROWSER_UNSUPPORTED = DBSDK.API.scheme + "://" + DBSDK.API.host + "/browser/unsupported", DBSDK.validateApp = function (g) {
        var I = DBSDK.getParameterByName("app_id");
        return I && "" !== I && A.fetch("https://api.designbold.com/pub/app/validate/" + I, {
            method: "POST",
            mode: "cors",
            redirect: "follow"
        }).then(function (A) {
            200 === A.status && "function" == typeof g && (DBSDK.API.app_id = I, g())
        }).catch(function () {}), !1
    }, DBSDK.$ = function (g) {
        var A = "querySelectorAll";
        return 0 === g.indexOf("#") && (A = "getElementById", g = g.substr(1, g.length)), document[A](g)
    }, DBSDK.isElementInViewport = function (I) {
        "function" == typeof jQuery && I instanceof jQuery && (I = I[0]);
        var C = I.getBoundingClientRect();
        return C.top >= 0 && C.left >= 0 && C.bottom <= (A.innerHeight || g.documentElement.clientHeight) && C.right <= (A.innerWidth || g.documentElement.clientWidth)
    }, DBSDK.bindEventHandler = function (g, A, I, C) {
        C = C || !1, g.addEventListener ? g.addEventListener(A, I, C) : g.attachEvent("on" + A, I)
    }, DBSDK.unbindEventHandler = function (g, A, I, C) {
        C = C || !1, g.removeEventListener ? g.removeEventListener(A, I, C) : g.detachEvent("on" + A, I)
    }, DBSDK.documentReady = function (I) {
        "loading" !== g.readyState ? I() : A.addEventListener ? A.addEventListener("DOMContentLoaded", I) : A.attachEvent("onreadystatechange", function () {
            "loading" !== g.readyState && I()
        })
    }, DBSDK.FX = {
        easing: {
            linear: function (g) {
                return g
            },
            quadratic: function (g) {
                return Math.pow(g, 2)
            },
            swing: function (g) {
                return .5 - Math.cos(g * Math.PI) / 2
            },
            circ: function (g) {
                return 1 - Math.sin(Math.acos(g))
            },
            back: function (g, A) {
                return Math.pow(g, 2) * ((A + 1) * g - A)
            },
            bounce: function (g) {
                for (var A = 0, I = 1; 1; A += I, I /= 2)
                    if (g >= (7 - 4 * A) / 11) return -Math.pow((11 - 6 * A - 11 * g) / 4, 2) + Math.pow(I, 2)
            },
            elastic: function (g, A) {
                return Math.pow(2, 10 * (g - 1)) * Math.cos(20 * Math.PI * A / 3 * g)
            }
        },
        animate: function (g) {
            g = g || {};
            var A = new Date,
                I = setInterval(function () {
                    var C = (new Date - A) / g.duration;
                    C > 1 && (C = 1), g.progress = C;
                    var i = g.delta(C);
                    g.step(i), 1 === C && (clearInterval(I), g.complete())
                }, g.delay || 10)
        },
        fadeOut: function (g, A) {
            A = A || {};
            this.animate({
                duration: A.duration || 400,
                delta: function (g) {
                    return g = this.progress, DBSDK.FX.easing.swing(g)
                },
                complete: A.complete || function () {},
                step: function (A) {
                    g.style.opacity = 1 - A
                }
            })
        },
        fadeIn: function (g, A) {
            A = A || {};
            this.animate({
                duration: A.duration || 400,
                delta: function (g) {
                    return g = this.progress, DBSDK.FX.easing.swing(g)
                },
                complete: A.complete || function () {},
                step: function (A) {
                    g.style.opacity = 0 + A
                }
            })
        }
    }, DBSDK.guid = function () {
        function g() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return g() + g() + "-" + g() + "-" + g() + "-" + g() + "-" + g() + g() + g()
    }, DBSDK.startDesignTool = function (A) {
        var I = A.currentTarget.getAttribute("data-href"),
            i = A.currentTarget.getAttribute("data-id");
        if ((t = DBSDK.$('.db-overlay[data-id="' + i + '"]')).length) t[0].style.display = "block";
        else {
            var e = g.createElement("iframe");
            e.style.display = "none", e.setAttribute("data-id", i), e.width = "100%", e.height = "100%", e.src = I, e.name = "db-design-frame-" + i, e.id = "db-design-frame-" + i;
            var n = function () {
                e.removeEventListener ? e.removeEventListener("load", null, !0) : e.detachEvent && e.detachEvent("onload", null), e.style.display = "block", DBSDK.$('.db-overlay[data-id="' + i + '"] .db-loading')[0].style.display = "none"
            };
            DBSDK.unbindEventHandler(e, "load", n, !0), DBSDK.bindEventHandler(e, "load", n, !0);
            var t = '<div class="db-overlay animated fadeIn" data-id="' + i + '" style="display: block;"><span class="db-close-lightbox">×</span><div class="db-lightbox"><div class="db-loading"><div class="inner-circles-loader large loading-icon"></div></div></div></div>';
            g.body.insertAdjacentHTML("beforeend", t), DBSDK.$('.db-overlay[data-id="' + i + '"] .db-lightbox')[0].appendChild(e), C = window.document.getElementById("db-design-frame-" + i), DBSDK.bindEventHandler(DBSDK.$('.db-overlay[data-id="' + i + '"] .db-close-lightbox')[0], "click", function (g) {
                g.currentTarget.parentNode.style.display = "none"
            })
        }
    }, DBSDK.initButtonFailed = function (g) {}, DBSDK.buildButtonUri = function (g, I, C, i, e, n, t) {
        g = g || "", I = I || "", C = C || "", i = i || 0, e = e || 0, n = n || "px";
        var o = "";
        "" !== g ? o = DBSDK.API_CREATE + "/image/w" + i + "/h" + e + "/" + A.btoa(g) : "" !== I || "" !== C ? (o = DBSDK.API_CREATE, o += "" !== I ? "/" + I : "/dt", "" !== C && (o += "/" + C)) : o = DBSDK.API_CREATE + "/custom/" + i + "/" + e + "/" + n;
        var r = [];
        if ("" !== DBSDK.API.app_id && r.push("app_id=" + DBSDK.API.app_id), r.length > 0)
            for (var a = 0; a < r.length; a++) o += (0 === a ? "?" : "&") + r[a];
        return o
    }, DBSDK.buildButtonUriEdit = function (g) {
        var A = "";
        A = DBSDK.API_CREATE + "/edit/" + g;
        var I = [];
        if ("" !== DBSDK.API.app_id && I.push("app_id=" + DBSDK.API.app_id), I.length > 0)
            for (var C = 0; C < I.length; C++) A += (0 === C ? "?" : "&") + I[C];
        return A
    }, DBSDK.buildButtonUriCopy = function (g) {
        var A = "";
        A = DBSDK.API_CREATE + "/copy/" + g;
        var I = [];
        if ("" !== DBSDK.API.app_id && I.push("app_id=" + DBSDK.API.app_id), I.length > 0)
            for (var C = 0; C < I.length; C++) A += (0 === C ? "?" : "&") + I[C];
        return A
    }, DBSDK.buildUnsupportedUrl = function () {
        return DBSDK.BROWSER_UNSUPPORTED
    }, DBSDK.initButton = function () {
        var I = DBSDK.$("div.db-btn-design-me");
        if (I.length)
            for (var i = 0; i < I.length; i++) {
                var e = I[i],
                    n = e.getAttribute("data-db-doctype") || "",
                    t = e.getAttribute("data-db-layout") || "",
                    o = e.getAttribute("data-db-title") || "Design It",
                    r = e.getAttribute("data-db-width") || 0,
                    a = e.getAttribute("data-db-height") || 0,
                    s = e.getAttribute("data-db-unit") || "px",
                    d = e.getAttribute("data-db-image") || "",
                    l = e.getAttribute("data-db-preview-target") || "",
                    c = DBSDK.guid(),
                    u = e.getAttribute("data-db-action") || "create",
                    b = e.getAttribute("data-db-docid") || "",
                    m = g.createElement("a");
                DBSDK.uuid = c, m.className = "db-btn-designit", m.href = "javascript:", m.innerHTML = o, m.setAttribute("data-id", c);
                var f = DBSDK.g(r, a, s);
                if ("" == d)
                    if ("create" == u && "" == n && "" == t && f) {
                        DBSDK.error = f;
                        w = function (g) {
                            DBSDK.initButtonFailed(g)
                        }
                    } else if ("copy" != u && "edit" != u || "" != b && /([a-zA-Z0-9]+)/.test(b)) w = function (g) {
                    DBSDK.startDesignTool(g)
                };
                else {
                    DBSDK.error = "Document id is not valid!";
                    w = function (g) {
                        DBSDK.initButtonFailed(g)
                    }
                } else var w = function (g) {
                    DBSDK.startDesignTool(g)
                };
                l && m.setAttribute("data-db-preview-target", l), DBSDK.unbindEventHandler(m, "click", w), DBSDK.bindEventHandler(m, "click", w);
                var h = new UAParser,
                    p = h.getDevice(),
                    D = h.getBrowser(),
                    v = h.getOS(),
                    y = D.name,
                    x = D.major,
                    B = A.location.pathname;
                void 0 === p.type && "" !== B && (("Chrome" === y || "Chromium" === y) && x < 51 || "Firefox" === y && x < 48 || ("IE" === y || "Edge" === y) && x < 11 || "Safari" === y && x < 10) || "mobile" === p.type && "iOS" === v.name && parseInt(v.version) < 9 ? m.setAttribute("data-href", DBSDK.buildUnsupportedUrl()) : "" !== d ? m.setAttribute("data-href", DBSDK.buildButtonUri(d, null, null, r, a, null, "img")) : "create" == u ? m.setAttribute("data-href", DBSDK.buildButtonUri(null, n, t, r, a, s, "button")) : "edit" == u ? m.setAttribute("data-href", DBSDK.buildButtonUriEdit(b)) : "copy" == u && m.setAttribute("data-href", DBSDK.buildButtonUriCopy(b)), e.parentNode.replaceChild(m, e)
            }
        var S = function (A) {
            var I, i, e, n, t = A.data.action || "",
                o = A.data.frame || "";
            if ("#db#design-button#getconfig" === t) C && C.contentWindow.postMessage({
                action: "#db#designit#config",
                config: DBSDK.config
            }, "*");
            else if ("#db#design-button#getconfiglogin" === t) DBSDK.config.hasOwnProperty("auth") || (DBSDK.config.auth = {}), C && C.contentWindow.postMessage({
                action: "#db#designit#configlogin",
                config: DBSDK.config.auth
            }, "*");
            else if ("#db#design-button#export-callback" === t) {
                if ("function" == typeof DBSDK.exportCallback && (I = g.getElementsByName(o)).length) {
                    var r = A.data.src || null,
                        a = A.data.document_id || null;
                    i = I[0].getAttribute("data-id");
                    var s = DBSDK.$('.db-btn-designit[data-id="' + i + '"]')[0].getAttribute("data-db-preview-target");
                    DBSDK.$('.db-overlay[data-id="' + i + '"] .db-close-lightbox')[0].click(), setTimeout(function () {
                        s ? DBSDK.exportCallback(r, a, s) : DBSDK.exportCallback(r, a)
                    }, 0)
                }
            } else if ("#db#design-button#quit" === t) {
                if ((I = g.getElementsByName(o)).length) {
                    i = I[0].getAttribute("data-id");
                    var d = DBSDK.$('.db-overlay[data-id="' + i + '"]')[0];
                    d.parentNode.removeChild(d)
                }
            } else if ("#db#design-button#logout" === t) {
                if (n = A.data.href || "", (I = g.getElementsByName(o)).length) {
                    var l = g.createElement("iframe");
                    l.style.display = "none", l.onload = function (A) {
                        g.body.removeChild(l)
                    }, l.src = n, g.body.appendChild(l);
                    for (var c = DBSDK.$(".db-overlay"), u = 0; u < c.length; u++) g.body.removeChild(c[u])
                }
            } else "#db#design-button#getimagesize" === t && (n = A.data.href || "", (I = g.getElementsByName(o)).length && (i = I[0].getAttribute("data-id"), e = DBSDK.$('.db-btn-designit[data-id="' + i + '"]')[0], DBSDK.$('.db-overlay[data-id="' + i + '"] iframe')[0].contentWindow.postMessage({
                action: "#db#designit#imagesize",
                width: e.naturalWidth || e.offsetWidth,
                height: e.naturalHeight || e.offsetHeight
            }, "*")))
        };
        DBSDK.unbindEventHandler(window, "message", S, !1), DBSDK.bindEventHandler(window, "message", S, !1)
    }, DBSDK.reloadButton = function () {
        DBSDK.initButton()
    }, DBSDK.documentReady(function () {
        A.DBSDK_Cfg.hasOwnProperty("export_callback") && (DBSDK.exportCallback = A.DBSDK_Cfg.export_callback), DBSDK.config = JSON.parse(JSON.stringify(A.DBSDK_Cfg)) || {}, DBSDK.validateApp(function () {
            DBSDK.initButton()
        })
    })
}(document, window);