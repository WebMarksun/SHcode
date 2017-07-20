(function ($) {
    "use strict";
    var AN = {};
    AN.lang = {
        loader: [
            "Loading",
            "网速太慢，刷新试试？"
        ]
    };
    AN.source = {
        part0: {
            list: [
                "a1_bg.jpg",
                "a1_p1.png",
                "a1_p2.png"
            ],
            isLoaded: false
        },
        part1: {
            list: [
                "child.png",
                "grandpa.png",
                "mom.png",
                "bg1.png",
                "bg2.png"
            ],
            isLoaded: false
        },
        part2: {
            list: [],
            isLoaded: false
        },
        part3: {
            list: [
                "a3_bg.jpg",
                "a3_p1.png",
                "a3_p2.png"
            ],
            isLoaded: false
        },
        part4: {
            list: [
                "a4_bg.jpg"
            ],
            isLoaded: false
        },
        part5: {
            list: [
                "cloth.jpg"
            ],
            isLoaded: false
        },
        part6: {
            list: [
                "party.jpg"
            ],
            isLoaded: false
        },
        part7: {
            list: [
                "lantern.jpg"
            ],
            isLoaded: false
        }
    };
    AN.init = function () {
        var initial = {};
        initial.ele = {
            full: ".fullpage",
            fullSection: ".fullpage .section",
            animeBox: ".animBox",
            animeStart1: "#anime-start",
            animeStart2: "#anime-start .text",
            animeEnd1: "#anime7",
            animeEnd2: "#anime-book",
            animeEnd3: "#anime-book .page",
            animeEnd4: "#anime8",
            animeEnd5: "#anime-end",
            animeEnd6: "#anime-end .text"
        };
        initial.fullpage = {
            onLoad: function (anchorLink, index) {
                if (index === 1) {
                    initial.anime.animeStart(true);
                }
                $(initial.ele.animeBox).eq(index - 1).fadeIn();
                if (index < $(initial.ele.fullSection).length) {
                    if (!AN.source["part" + index].isLoaded) {
                        AN.load(AN.source["part" + index]);
                    }
                }
                initial.anime.animeEnd(false);
            },
            onLeave: function () {
            }
        };
        initial.anime = {
            animeStart: function (on) {
                if (on) {
                    $(initial.ele.animeStart1).fadeIn();
                    $(initial.ele.animeStart2).each(function (i, e) {
                        $(e).addClass("textShow" + (i + 1));
                    });
                } else {
                    $(initial.ele.animeStart1).hide();
                    $(initial.ele.animeStart2).each(function (i, e) {
                        $(e).removeClass("textShow" + (i + 1));
                    });
                }
            },
            animeEnd : function (on) {
                if (on) {
                    $(initial.ele.animeEnd1).addClass("zoomOut");
                    $(initial.ele.animeEnd2).addClass("zoomIn");
                    $(initial.ele.animeEnd3).addClass("turn");
                    $(initial.ele.animeEnd4).delay(5000).fadeIn();
                    $(initial.ele.animeEnd5).delay(7000).fadeIn();
                    $(initial.ele.animeEnd6).each(function (i, e) {
                        $(e).addClass("textShow" + (i + 1));
                    });
                    setTimeout(function () {
                        openFrameAnim = true;
                    }, 7000);
                } else {
                    $(initial.ele.animeEnd1).removeClass("zoomOut");
                    $(initial.ele.animeEnd2).removeClass("zoomIn");
                    $(initial.ele.animeEnd3).removeClass("turn");
                    $(initial.ele.animeEnd4).hide();
                    $(initial.ele.animeEnd5).hide(function () {
                        openFrameAnim = false;
                    });
                    $(initial.ele.animeEnd6).each(function (i, e) {
                        $(e).removeClass("textShow" + (i + 1));
                    });
                }
            }
        };
        $(initial.ele.full).fullpage({
            sectionSelector: initial.ele.fullSection,
            resize: true,
            onLeave: initial.fullpage.onLeave,
            afterLoad: initial.fullpage.onLoad
        });
        $(initial.ele.animeEnd1)[0].addEventListener("touchend", function () {
            initial.anime.animeEnd(true);
        });
    };
    AN.load = function (source) {
        var loader = {};
        loader.ele = {
            cover: ".loader",
            message: ".message"
        };
        loader.loadSource = function (callback) {
            var success = [],
                error = [];
            $(loader.ele.message).html(AN.lang.loader[0]);
            $.each(source.list, function (index, element) {
                loader.loadSourceDetail(element, function (r, s) {
                    if (r) {
                        success.push(s);
                    } else {
                        error.push(s);
                    }
                    $(loader.ele.message).html(Math.round((success.length / source.list.length) * 100) + "%");
                    if (success.length === source.list.length) {
                        callback(true);
                        $(loader.ele.cover).hide();
                    }
                    if (error.length > 0) {
                        $(loader.ele.message).html(AN.lang.loader[1]);
                    }
                    if ((success.length + error.length) === source.list.length) {
                        window.console.log("success: " + success);
                        window.console.log("error: " + error);
                    }
                });
            });
        };
        loader.loadSourceDetail = function (src, callback) {
            var obj;
            src = "asset/" + src;
            if (/\.jpg|\.png|\.gif/.test(src)) {
                obj = new Image();
                obj.src = src;
                if (obj.complete) {
                    callback(true, src);
                } else {
                    obj.onload = function () {
                        callback(true, src);
                    };
                    obj.onerror = function () {
                        callback(false, src);
                    };
                }
            } else {
                if (window.XMLHttpRequest) {
                    obj = new window.XMLHttpRequest();
                } else if (window.ActiveXObject) {
                    obj = new window.ActiveXObject("Microsoft.XMLHTTP");
                }
                obj.open("GET", src, true);
                obj.send();
                obj.onreadystatechange = function () {
                    if (obj.readyState === 4) {
                        if (obj.status === 200) {
                            callback(true, src);
                        } else {
                            callback(false, src);
                        }
                    }
                };
            }
        };
        loader.loadSource(function (result) {
            if (result) {
                source.isLoaded = true;
            }
        });
    };
    AN.main = (function () {
        AN.init();
        AN.load(AN.source.part0);
    }());
}(window.jQuery));