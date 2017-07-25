(function ($) {
    "use strict";
    var CR = {};
    CR.ele = {
        win: $(window),
        dom: $(document),
        guide: $(".guide"),
        qr: $(".qrcode"),
        pcOnly: $(".pc-only"),
        container: $(".container"),
        iframeWrapper: $(".iframe-wrapper")
    };
    CR.checkPlatform = function () {
        return (/(iPhone|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i.test(navigator.userAgent));
    };
    CR.makeQrCode = function () {
        var renderType;
        renderType = (!!document.createElement('canvas').getContext) ? "canvas" : "table";
        CR.ele.qr.qrcode({
            width: 120,
            height: 120,
            text: window.location.href.split("#")[0],
            render: renderType
        });

    };
    CR.toggleGuide = function () {
        setTimeout(function () {
            CR.ele.guide.fadeOut();
        }, 2000);
    };
    CR.init = (function () {
        if (CR.checkPlatform()) {
            CR.ele.pcOnly.hide();
            CR.ele.container.css({
                height: window.innerHeight,
                padding: 0
            });
            CR.ele.iframeWrapper.css({
                border: 0,
                width: "100%",
                height: "100%"
            });
        } else {
            CR.ele.container.css({
                height: window.innerHeight - 96
            });
            CR.ele.iframeWrapper.css({
                width: (CR.ele.container.height() - 10) / 736 * 414,
                height: CR.ele.container.height() - 10
            });
            CR.makeQrCode();
            CR.toggleGuide();
        }
    }());
    CR.ele.win.resize(function () {
        CR.ele.container.css({
            height: window.innerHeight - 96
        });
        CR.ele.iframeWrapper.css({
            width: (CR.ele.container.height() - 10) / 736 * 414,
            height: CR.ele.container.height() - 10
        });
    });
}(window.jQuery));