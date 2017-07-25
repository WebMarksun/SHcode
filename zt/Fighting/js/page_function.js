(function ($) {
    "use strict";
    var GO = {};
    GO.ele = {
        scroll: $(".fullpage"),
        stay: $(".stay"),
        staySection: $(".stay .section"),
        fullSection: $(".fullpage .section"),
        bg: $(".bg"),
        player: $(".player"),
        audio: $("audio"),
        navi: $(".jump")
    };
    GO.showSection = function (index) {
        GO.ele.staySection.eq(index).fadeIn();
        GO.ele.staySection.eq(index).siblings().fadeOut();
    };
    GO.changeBg = function (index) {
        GO.ele.bg[0].src = "image/bg" + index + ".jpg";
        GO.ele.player[0].src = "image/audio" + index + ".png";
    };
    GO.onLeave = function (index, nextIndex, direction) {
        if (nextIndex === 1 || nextIndex === 2) {
            GO.showSection(1);
        } else {
            GO.showSection(0);
        }
        if (nextIndex >= 5 && nextIndex <= 8) {
            GO.changeBg(2);
        } else {
            GO.changeBg(1);
        }
        GO.ele.fullSection.eq(index - 1).find("img").fadeOut(100);
    };
    GO.onLoad = function (anchorLink, index) {
        GO.ele.fullSection.eq(index - 1).find("img").each(function (i, e) {
            $(this).delay(i * 400).fadeIn();
        });
    };
    GO.onJump = function () {
        var aim = [3, 5, 9, 2, 2, 2];
        $.fn.fullpage.moveTo(aim[$(this).index(".jump")]);
    };
    GO.onPause = function () {
        var aim = GO.ele.audio[0];
        if (aim.paused) {
            aim.play();
        } else {
            aim.pause();
        }
    };
    GO.ele.navi.click(GO.onJump);
    GO.ele.player.click(GO.onPause);
    GO.ele.scroll.fullpage({
        sectionSelector: ".fullpage .section",
        resize : true,
        onLeave: GO.onLeave,
        afterLoad: GO.onLoad
    });
}(window.jQuery));