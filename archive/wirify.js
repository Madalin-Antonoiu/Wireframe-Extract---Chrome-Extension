var wf_wirify;

if (typeof jQuery == "undefined") {
    var jQ = document.createElement("script");
    jQ.type = "text/javascript";
    if (!wfIsIE()) {
        jQ.onload = wfInit
    } else {
        jQ.onreadystatechange = function() {
            if ((typeof wf_wirify == "undefined") && ((this.readyState === "loaded") || (this.readyState === "complete"))) {
                wfInit()
            }
        }
    }
    jQ.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js";
    document.body.appendChild(jQ)
} else {
    wfInit()
}

function wfInit() {
    if (typeof wf_wirify == "undefined") {
        wf_wirify = wfClosure((typeof jQuery.noConflict == "undefined") ? jQuery : jQuery.noConflict())
    }
    wf_wirify()
}

function wfClosure(N) {
    var X = "\n\nWirify - The web as wireframes\nCopyright (c) 2010-2017 Volkside. All rights reserved.\nVisit www.wirify.com";
    var D = "1.7";
    var P = ".2";
    var w = "";
    var b = "Wirify wireframe - ";
    var O = 0.75;
    var K = false;
    var x = 2;
    var Y = 5;
    var h, j, L, M, ad, T;
    var I = {
        object: "",
        embed: "",
        iframe: "",
        video: ""
    };
    var m = {
        canvas: "",
        img: ""
    };
    var s = {
        input: "",
        select: "",
        textarea: ""
    };
    var c = {
        h1: "",
        h2: "",
        h3: "",
        h4: "",
        h5: "",
        h6: ""
    };
    h = false;
    j = 'Wirify Pro and Wirify credits available again! <a class="wf-nw" href="https://www.wirify.com/pro/buy-credits?ref=wf" title="Purchase Wirify credits and upgrade to Wirify Pro">Get it now</a>';
    wf_troubleshoot = "- Make sure page is valid HTML\n- Make sure page has no prior JavaScript errors\n- Make sure page uses recent jQuery version\n- Try running Wirify again\n- Try a different browser";
    wf_min_elements_warning = "Wirifying completed but very few page elements detected - you will probably see just a blank page.\n\nThis usually happens when the page makes extensive use of Flash or iframes. These pages do not wirify well.";
    if (typeof "Sun Sep 10 13:45:00 2017" != "undefined") {
        w = "Sun Sep 10 13:45:00 2017 AEST"
    }
    L = "http://www.wirify.com/client/";
    M = "http://www.wirify.com/pro/";
    ad = 86400000;
    T = false;
    var n, y, E, g, U, e, W, o, F, ab;

    function B() {
        n = N(window).width();
        y = N(window).height();
        E = false;
        g = 500;
        e = 0;
        W = 0;
        F = "";
        ab = 0
    }

    function p() {
        try {
            i();
            var aj = {
                "http:": "",
                "https:": "",
                "file:": ""
            };
            if (!(document.location.protocol in aj)) {
                alert("Please navigate to a web page you want to turn into a wireframe first, then click the Wirify bookmark again." + X);
                return
            } else {
                if (N("frameset").length != 0) {
                    alert("Sorry, pages with frames cannot be wirifed." + X);
                    return
                }
            }
            u();
            var ag = N("#wirify");
            if (ag.length != 0) {
                if (N("#wf-wireframe").hasClass("wf-greek")) {
                    a();
                    return
                } else {
                    if (!ag.is(":visible") && E) {
                        ag.remove();
                        B()
                    } else {
                        ag.toggle();
                        return
                    }
                }
            }
            if (N("#wf-stylesheet").length == 0) {
                B();
                t();
                if ((document.location.protocol == "https:") && !T) {
                    L = L.replace("http:", "https:");
                    M = M.replace("http:", "https:")
                }
                if (N("body").css("position") == "relative") {
                    N("body").css("position", "static")
                }
                N("head").append('<link id="wf-stylesheet" rel="stylesheet" href="' + L + "stylesheets/wirify-" + D + (T ? "" : ".min") + ".css" + (ad ? "?" + parseInt(new Date().getTime() / ad) : "") + '" type="text/css" media="all" />')
            }
            var ak = aa();
            N("body").append('<div id="wirify" class="wirify' + (T ? " wf-dev" : "") + '" style="width: 100%; height: ' + (N(document).height() + 100) + 'px;">	<div id="wf-info" class="wirify" style="position: absolute; width: auto;">		<a class="wf-nw" href="http://www.volkside.com/" title="Volkside - Interaction and Information Design, User Experience and Usability"><img alt="Volkside logo" src="' + L + 'images/volkside-logo.png" /></a>		<h2>Wirifying, please wait...</h2>		<p>			Wireframe created with			<a class="wf-nw" href="http://www.wirify.com/" title="Wirify - The web as wireframes, from Volkside">Wirify</a> by			<a class="wf-nw" href="http://www.volkside.com/" title="Volkside - Interaction and Information Design, User Experience and Usability">Volkside</a>			on ' + q() + '&nbsp;</p>		<p class="wf-promo">' + j + '</p>		<ul id="wf-menu">			<li><a class="parent" href="#" title="Wirify' + (h ? " Pro" : "") + ' menu">&#9660; Wirify' + (h ? " Pro" : "") + "</a>				<ul>\n" + ak + '</ul>			</li>		</ul>		<p class="wf-copyright" title="Wirify &copy 2010-2017 Volkside. All rights reserved.">			&nbsp;&copy;&nbsp; Page layout and structure are property of the			<a class="wf-nw" href="' + location.href + '" title="Original page: ' + o + '">website owner</a></p>	</div>	<div id="wf-watermark" class="wirify" style="position: absolute;"><p>&nbsp;</p></div>	<div id="wf-wireframe" class="wirify" style="position: absolute; width: ' + N(document).width() + "px; height: " + (N(document).height() + 100) + 'px;">&nbsp;</div></div>');
            N("#wf-watermark").hide();
            N("#wirify").click(C);
            N("#wf-info").click(function(al) {
                al.stopPropagation()
            });
            N(window).resize(A);
            N("#wirify a.wf-nw").wfNewWindow();
            if (!T) {
                N('#wf-menu a[href="#export"]').addClass("wf-disabled")
            }
            N("#wf-menu a").click(r);
            N("#wf-menu").mouseover(function() {
                N("#wf-menu ul").show()
            });
            window.setTimeout(v, 100);
            if ((typeof jQuery.ui == "undefined") || (typeof jQuery.draggable == "undefined")) {
                var ah = (document.location.protocol == "https:" ? "https:" : "http:") + "//ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js";
                N.getScript(ah, f)
            } else {
                f()
            }
        } catch (ai) {
            alert("Wirifying this page was unsuccessful\n(" + ai + ")\n\n" + wf_troubleshoot + X);
            return
        }
        l()
    }

    function aa() {
        var ag = "";
        ag += '<li><a href="#export" rel="" title="Export wireframe a downloadable document">Export wireframe <span class="wf-menu-arrow">&#9658;</span></a>\n<ul>\n';
        ag += '<li><a href="#export" rel="graffle" title="Export wireframe as an OmniGraffle document">Export to OmniGraffle</a></li>\n<li><a href="#export" rel="bmml" title="Export wireframe as a Balsamiq Mockups document">Export to Balsamiq</a></li>\n<li><a href="#export" rel="vdx" title="Export wireframe as a Microsoft Visio document">Export to Visio</a></li>\n<li><a href="#export" rel="svg" title="Export wireframe as a Scalable Vector Graphics (SVG) document">Export as SVG</a></li>\n';
        ag += '<li><a class="wf-nw" href="http://www.wirify.com/about/wirify-pro-and-wirify-credits/" title="Wirify Pro lets you export wireframes to OmniGraffle and Balsamiq, and more">Get Wirify Pro to export wireframes, and more</a></li>\n';
        ag += "</ul>\n</li>\n";
        ag += '<li><a href="#greekredact" rel="" title="Greek and redact original page">Greek and redact 	<span class="wf-menu-arrow">&#9658;</span></a>\n<ul>\n';
        ag += '<li><a href="#greek" title="Greek original page text with lorem ipsum">Greek with lorem ipsum</a></li>\n';
        ag += '<li><a href="#redact" title="Redact original page text using script font">Redact using script font</a></li>\n';
        ag += "</ul>\n</li>\n";
        ag += '<li><a href="#" title="Wirify help and support">Support <span class="wf-menu-arrow">&#9658;</span></a>\n<ul>\n<li><a href="#about" title="View Wirify version and page processing details">About Wirify</a></li>\n';
        ag += '<li><a class="wf-nw" href="http://www.wirify.com/support/user-guide/" title="Go to Wirify user guide">Wirify user guide</a></li>\n';
        ag += '<li><a class="wf-nw" href="http://www.wirify.com/support/contact/" title="Leave feedback">Got feedback?</a></li>\n<li><a class="wf-nw" href="http://twitter.com/wirify" title="Follow Wirify on Twitter">Follow Wirify on Twitter</a></li>\n';
        ag += '</ul>\n</li>\n<li><a href="#close" title="Close wireframe and return to original page">Close</a></li>\n';
        return ag
    }

    function ae() {
        N("#wf-menu ul a").not('a[href="#greek"],a[href="#redact"],a[href="#about"],a[href="#close"],a[href="#"],a.wf-nw').addClass("wf-disabled")
    }

    function r() {
        if (N(this).hasClass("wf-disabled")) {
            return false
        }
        N("#wf-menu ul").toggle();
        var ah = N(this).attr("href").substr(1);
        switch (ah) {
            case "greek":
                try {
                    i();
                    R("Greeking, please wait...");
                    if (typeof wfLoremipsumizer == "undefined") {
                        N.getScript(L + "plugins/loremipsumizer" + (T ? "" : ".min") + ".js" + (ad ? "?" + parseInt(new Date().getTime() / ad) : ""), H)
                    } else {
                        window.setTimeout(H, 100)
                    }
                    N(this).addClass("wf-disabled")
                } catch (ag) {
                    R();
                    alert("Greeking this page was unsuccessful\n(" + ag + ")\n\n" + wf_troubleshoot + X)
                }
                break;
            case "redact":
                try {
                    i();
                    R("Redacting, please wait...");
                    if (typeof wfExittext == "undefined") {
                        N.getScript(L + "plugins/exittext" + (T ? "" : ".min") + ".js" + (ad ? "?" + parseInt(new Date().getTime() / ad) : ""), G)
                    } else {
                        window.setTimeout(G, 100)
                    }
                } catch (ag) {
                    R();
                    alert("Redacting this page was unsuccessful\n(" + ag + ")\n\n" + wf_troubleshoot + X)
                }
                break;
            case "about":
                alert(d() + X);
                break;
            case "close":
                C();
                break
        }
        return false
    }

    function t() {
        N.fn.wfBlockify = af;
        N.fn.wfRect = ac;
        N.fn.wfNewWindow = function() {
            return N(this).each(function() {
                N(this).attr("title", N(this).attr("title") + " - Opens in a new window");
                N(this).click(function() {
                    window.open(this.href);
                    return false
                })
            })
        };
        N.expr[":"].noOverflow = function(ag) {
            return (N(ag).css("overflow") === "hidden")
        };
        if (!Q() && !wfIsIE()) {
            N.fn.wfWidth = function() {
                return N(this).width()
            };
            N.fn.wfHeight = function() {
                return N(this).height()
            };
            return
        }
        N.fn.wfWidth = function() {
            var ag = N(this).width();
            if (ag == n) {
                ag = parseInt(N(this).css("width"));
                if (isNaN(ag) || (ag == 0)) {
                    ag = N(this).innerWidth()
                }
            }
            return ag
        };
        N.fn.wfHeight = function() {
            var ag = N(this).height();
            if (ag == y) {
                ag = parseInt(N(this).css("height"));
                if (isNaN(ag) || (ag == 0)) {
                    ag = N(this).innerHeight()
                }
            }
            return ag
        }
    }

    function f() {
        var ah = N(document).width(),
            al = N(document).height(),
            ag = N("#wf-info").wfWidth(),
            ai = N("#wf-info").wfHeight(),
            ak = parseInt(O * ag);
        var am = [-ak + 12, 0, ah - (ag - ak) - 12, al - ai - 12];
        if (N("#wf-info").hasClass("ui-draggable")) {
            N("#wf-info").draggable("option", "containment", am)
        } else {
            try {
                N("#wf-info").draggable({
                    containment: am
                })
            } catch (aj) {}
        }
    }

    function v() {
        var ah = new Array("table", "dl", "pre", "blockquote", "code", "span", "font", "a", "p ~ ol", "p ~ ul", "ol + p", "ul + p", "p", "thead", "img", "object", "embed", "iframe", "video", "canvas", "input", "select", "textarea", "h6", "h5", "h4", "h3", "h2", "h1");
        if (typeof Cufon != "undefined") {
            delete m.canvas;
            ah.splice(ah.indexOf("canvas"), 1)
        }
        N.each(ah, function(al, am) {
            ((am.indexOf("+") > 0) ? N(am).prev() : N(am)).filter(":visible").not("#wirify *").wfBlockify()
        });
        if (W < Y) {
            var ai = null,
                ag;
            N("iframe").each(function() {
                if ((ai == null) || ((N(this).wfWidth() * N(this).wfHeight()) > (ai.wfWidth() * ai.wfHeight()))) {
                    ai = N(this)
                }
            });
            try {
                if ((ai != null) && (ag = ai.contents().find("html body")).length) {
                    N("#wf-wireframe").html("&nbsp;");
                    W = 0;
                    N.each(ah, function(al, am) {
                        ((am.indexOf("+") > 0) ? ag.find(am).prev() : ag.find(am)).filter(":visible").not("#wirify *").wfBlockify()
                    })
                }
            } catch (aj) {}
        }
        var ak = R();
        N("#wf-watermark p").text(ak + " via wirify");
        N("#wf-watermark").show();
        window.setTimeout(S, 100)
    }

    function S() {
        N("#wf-info").css("width", N("#wf-info").wfWidth() + 0.5);
        N("#wf-info").css("left", N("#wf-info").offset().left);
        var ag = N("#wf-watermark").wfWidth();
        var ah = Math.max(0, g) + Math.min(n, 1000) - 50 - ag;
        N("#wf-watermark").css("width", ag + 10);
        N("#wf-watermark").css("left", ah);
        N("#wf-watermark").css("top", y - 50);
        if (N("#wf-info").hasClass("ui-draggable")) {
            f()
        }
        e = Z();
        if (W < Y) {
            alert(wf_min_elements_warning)
        }
    }

    function C() {
        if (N("#wf-wireframe").hasClass("wf-greek")) {
            a();
            return
        }
        u();
        T ? N("#wirify").remove() : N("#wirify").hide()
    }

    function af() {
        var ap, al, ai, am;
        var ak, ao;
        var an, aj, ah;
        var ag = (N().jquery.substr(0, 3) == "1.2");
        return N(this).each(function() {
            if (ag && N(this).parents("#wirify").length == 1) {
                return
            }
            ap = N(this).get(0).nodeName.toLowerCase();
            am = N(this).wfRect();
            if ((!am.top && !am.left) || (am.width < 5) || (am.height < 5)) {
                return
            }
            try {
                an = (x > 0) ? N(this).parents(":noOverflow") : [];
                if (an.length > 0) {
                    aj = an.filter(":last").wfRect();
                    if ((x == 2) && (an.length > 2)) {
                        ah = an.filter(":eq(1)").wfRect();
                        if (V(aj, ah)) {
                            aj = J(aj, ah)
                        }
                    }
                    if (V(am, aj)) {
                        am = J(am, aj)
                    } else {
                        return
                    }
                }
            } catch (aq) {}
            if ((am.width < 5) || (am.height < 5)) {
                return
            }
            al = ["wirify", " wf-" + ap];
            if (ap in I) {
                al.push("wf-interactive")
            } else {
                if (ap in m) {
                    al.push("wf-placeholder");
                    am.width -= 4;
                    am.height -= 4
                } else {
                    if (ap in s) {
                        al.push("wf-formelem");
                        am.width -= 6;
                        am.height -= 6;
                        if ((ap == "input") && (N(this).attr("type") in {
                                submit: "",
                                button: "",
                                image: ""
                            })) {
                            al.push("wf-button");
                            am.width -= 2;
                            am.height -= 2
                        }
                    }
                }
            }
            al = al.join(" ");
            if (am.width < 1) {
                am.width = 1
            }
            if (am.height < 1) {
                am.height = 1
            }
            ai = "top: " + am.top + "px; left: " + am.left + "px; width: " + am.width + "px; height: " + am.height + "px;";
            ak = "&nbsp;";
            if (ap in m) {
                N("#wf-wireframe").append('<img class="' + al + '" style="' + ai + '" title="' + ap + '" alt="Placeholder image" src="' + L + 'images/placeholder.png" />')
            } else {
                N("#wf-wireframe").append('<div class="' + al + '" style="' + ai + '" title="' + ap + '">' + ak + "</div>")
            }
            g = Math.min(g, am.left);
            W++
        })
    }

    function A() {
        N(window).unbind("resize", A);
        E = true
    }

    function a() {
        R("Reloading page...");
        document.location = document.location;
        return false
    }

    function u() {
        if (typeof o == "undefined") {
            o = document.title
        }
        if (document.title.indexOf(b) == 0) {
            document.title = o
        } else {
            document.title = b + o
        }
    }

    function R(ai) {
        if (typeof ai != "undefined") {
            N("#wf-info h2").text(ai + "");
            return ai
        }
        var ah;
        if ((document.location.protocol == "file:") || (document.location.host == "") || (document.location.host == "localhost")) {
            var ag = (document.location + "").split("/");
            ah = ag.pop();
            if (ah == "") {
                ah = ag.pop()
            }
            ah = ah.split("?")[0]
        } else {
            ah = (document.location.host + "").replace(/^www\./, "")
        }
        N("#wf-info h2").text(ah);
        return ah
    }

    function q() {
        var ag = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
        var ah = new Date();
        return (ah.getDate() + " " + ag[ah.getMonth()] + " " + ah.getFullYear())
    }

    function d() {
        var ai = (h ? "Wirify Pro" : "Wirify free"),
            aj = "",
            ag = "";
        var ah = N("#wf-wireframe").hasClass("wf-greek");
        if (h) {
            aj = "\n\nWirify Pro licensed to " + wf_bookmarklet.licensee
        }
        ag = (typeof wf_bookmarklet == "object") ? wf_bookmarklet.ver : wf_bookmarklet;
        ai += " " + D + P + ", bookmarklet " + ag + ", jQuery " + N.fn.jquery + "\n(" + w + ")" + aj + "\n\n" + (ah ? "Page greeked" : W + " page elements wirified") + " in " + e + "s";
        if (ah) {
            ai += "\nLorempsumizer (c) Choon Keat"
        }
        return ai
    }

    function l(ag) {
        var aj = z(ag);
        var ai = "";
        for (var ah in aj) {
            ai += ah + "=" + aj[ah] + "&"
        }
        N("#wf-watermark").css("background", 'white url("' + L + "usage/?" + ai + 'img=1") top right no-repeat')
    }

    function Q() {
        return Object.prototype.toString.call(window.opera) == "[object Opera]"
    }

    function ac() {
        var ag = {
            top: N(this).offset().top,
            left: N(this).offset().left,
            width: N(this).wfWidth(),
            height: N(this).wfHeight()
        };
        ag.right = ag.left + ag.width;
        ag.bottom = ag.top + ag.height;
        return ag
    }

    function J(ah, ag) {
        var ai = {
            left: Math.max(ah.left, ag.left),
            top: Math.max(ah.top, ag.top),
            right: Math.min(ah.right, ag.right),
            bottom: Math.min(ah.bottom, ag.bottom)
        };
        ai.width = ai.right - ai.left;
        ai.height = ai.bottom - ai.top;
        return ai
    }

    function V(ah, ag) {
        return !(ag.left > ah.right || ag.right < ah.left || ag.top > ah.bottom || ag.bottom < ah.top)
    }

    function i() {
        U = new Date().getTime()
    }

    function Z() {
        return ((new Date().getTime() - U) / 1000)
    }

    function z(ag) {
        var ai = {
            url: encodeURIComponent(location.href),
            title: encodeURIComponent(o),
            wf: D + P + (h ? "pro" : ""),
            bm: ((typeof wf_bookmarklet == "object") ? wf_bookmarklet.ver : wf_bookmarklet),
            t: parseInt(new Date().getTime())
        };
        if (typeof ag != "undefined") {
            for (var ah in ag) {
                ai[ah] = ag[ah]
            }
        }
        return ai
    }

    function k(ag) {
        N("#wirify").css("cursor", (typeof ag == "string") ? ag : "pointer")
    }

    function H() {
        N("#wirify").css("background-color", "transparent");
        N("#wf-wireframe").html("&nbsp;");
        N("#wf-wireframe").addClass("wf-greek");
        N("#wf-info p.wf-promo").html('and <a class="wf-nw" href="http://blog.choonkeat.com/weblog/2010/09/loremipsumizer.html" title="Loremipsumizer by Choon Keat">Loremipsumizer</a> by <a class="wf-nw" href="http://www.choonkeat.com/" title="Choon Keat">Choon Keat</a>');
        N("#wf-info p.wf-promo a.wf-nw").wfNewWindow();
        var ag = wfLoremipsumizer(N, L);
        ag();
        R();
        N("#wf-wireframe").click(C);
        e = Z();
        l({
            mode: "greek"
        })
    }

    function G() {
        N("#wirify").css("background-color", "transparent");
        N("#wf-wireframe").html("&nbsp;");
        N("#wf-wireframe").addClass("wf-greek");
        N("#wf-wireframe").attr("title", "Click anywhere to close redacted view and reload original page");
        N("#wf-wireframe").attr("style", N("#wirify").attr("style") + " cursor: no-drop; ");
        N("#wf-info").hide();
        N("#wf-info p.wf-promo").html('and <a class="wf-nw" href="http://brycehanscomb.github.io/exittext/" title="Exittext by Bryce Hanscomb">Exittext</a> by <a class="wf-nw" href="https://brycehanscomb.com/" title="Bryce Hanscomb">Bryce Hanscomb</a>');
        N("#wf-info p.wf-promo a.wf-nw").wfNewWindow();
        var ag = wfExittext(N, L);
        ag();
        R();
        N("#wf-wireframe").click(C);
        e = Z();
        l({
            mode: "redact"
        })
    }
    return p
}

function wfIsIE() {
    return /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)
};



//Bookmarklet:
//javascript:(function(){wf_bookmarklet={ver:'1.5',ka:86400000,to:7000};if(typeof wfInit=='undefined'){var s=document.body.appendChild(document.createElement('script')).src=(document.location.protocol=='https:'?'https:':'http:')+'//www.wirify.com/client/wirify.min.js?'+parseInt(new Date().getTime()/wf_bookmarklet.ka);window.setTimeout(function(){if(typeof wfInit=='undefined'){alert('Wirify is still processing or temporarily unavailable, please try again in a moment\n\nVisit  twitter.com/wirify  and  www.wirify.com/blog  for latest announcements');}},wf_bookmarklet.to);}else{wfInit();}})();

//Extended:
// javascript: (function() {
//     wf_bookmarklet = {
//         ver: '1.5',
//         ka: 86400000,
//         to: 7000
//     };
//     if (typeof wfInit == 'undefined') {
//         var s = document.body.appendChild(document.createElement('script')).src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//www.wirify.com/client/wirify.min.js?' + parseInt(new Date().getTime() / wf_bookmarklet.ka);
//         window.setTimeout(function() {
//             if (typeof wfInit == 'undefined') {
//                 alert('Wirify is still processing or temporarily unavailable, please try again in a moment\n\nVisit  twitter.com/wirify  and  www.wirify.com/blog  for latest announcements');
//             }
//         }, wf_bookmarklet.to);
//     } else {
//         wfInit();
//     }
// })();

