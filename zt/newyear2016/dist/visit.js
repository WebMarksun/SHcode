(function ($) {
    "use strict";
    var NY = {};
    NY.ele = {
        body: $("body"),
        question: $(".question"),
        questionOpt: $(".question .opt"),
        questionBegin: $(".question .next-b"),
        questionNext: $(".question .next-q"),
        questionGo: $(".question .next-g"),
        full: $(".fullpage"),
        fullSection: $(".fullpage .section"),
        fullNext: $(".next-s"),
        btnReturn: $(".return"),
        btnReview: $(".review")
    };
    NY.showImg = function (collec, type) {
        collec.each(function (i, e) {
            if (type) {
                $(this).delay((i + 1) * 500).fadeIn();
            } else {
                $(this).fadeIn();
            }
        });
    };
    NY.onLeave = function (index, nextIndex, direction) {
        NY.ele.fullSection.find("img").fadeOut(200);
    };
    NY.onLoad = function (anchorLink, index) {
        NY.showImg(NY.ele.fullSection.eq(index - 1).find("img"), 1);
        NY.ele.fullNext[0].style.display = (index === NY.ele.fullSection.length) ? "none" : "block";
    };
    NY.showPage = function (selector) {
        NY.ele.question.children().removeClass("active");
        NY.ele.question.children(selector).addClass("active");
    };
    NY.ele.full.fullpage({
        sectionSelector: ".fullpage .section",
        resize: true,
        onLeave: NY.onLeave,
        afterLoad: NY.onLoad
    });
    NY.ele.btnReturn.click(function () {
        location.href = "http://comic.qianlong.com/smartbj/newyear2016/index.html";
    });
    NY.ele.btnReview.click(function () {
        $.fn.fullpage.moveTo(1);
    });
    NY.ele.questionBegin.click(function () {
        NY.showPage("#page1");
    });
    NY.ele.questionNext.click(function () {
        var p = NY.ele.question.children(".active").attr("id"),
            i = NY.ele.question.find("#" + p + " .opt.active").index("#" + p + " .opt");
        if (i < 0) {
            window.alert("请选择选项~");
        } else {
            i = (i === 1) ? 0 : 1;
            NY.showPage("#" + p + i);
        }
    });
    NY.ele.questionGo.click(function () {
        NY.ele.question.fadeOut();
        NY.ele.full.fadeIn();
        NY.ele.fullNext.fadeIn();
    });
    NY.ele.questionOpt.click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });
}(window.jQuery));
var obj = {
    title: "“京”彩！这才是过年的正确姿势！",
    imgUrl: "http://comic.qianong.com/smartbj/newyear2016/image/sharewx.jpg",
    desc: "猴年在京怎么过？你想知道的都在这儿了！参与更有大奖哦~",
    link: "http://comic.qianlong.com/smartbj/newyear2016/index.html",
    audio: "",
    bdname: "xn2016-cqq",
    bdfunc: "share",
    bdvalue: "weixin"
};
//SHARE.setObject(obj);