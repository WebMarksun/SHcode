/*global $,wx */
var SHARE = {},
    obj = {
        title: "兔爷动漫",
        imgUrl: "http://comic.qianlong.com/wx/img/wxshare.jpg",
        desc: "兔爷动漫",
        link: "",
        audio: "",
        bdname: "tuye",
        bdfunc: "share",
        bdvalue: "weixin"
    };


function base64encode(str) {
    var out, i, len, base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 255;
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 3) << 4);
            out += "==";
            break
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 3) << 4) | ((c2 & 240) >> 4));
            out += base64EncodeChars.charAt((c2 & 15) << 2);
            out += "=";
            break
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 3) << 4) | ((c2 & 240) >> 4));
        out += base64EncodeChars.charAt(((c2 & 15) << 2) | ((c3 & 192) >> 6));
        out += base64EncodeChars.charAt(c3 & 63)
    }
    return out
};

/**
 * @func SHARE.init
 * @desc 微信分享鉴权验证
 * @param {object} data 参数对象
 */
SHARE.init = function () {
    "use strict";
    $.ajax({
        type: "GET",
        url: "http://zhan.qianlong.com/weixin/chart_share",
        dataType: "jsonp",
        data: {
            "weburl": base64encode(window.location.href.split("#")[0])
        },
        jsonp: "callback",
        jsonpCallback: "jsonpcallback",
        success: function (json) {
            wx.config({
                debug: false,
                appId: json.appId,
                timestamp: json.timestamp,
                nonceStr: json.nonceStr,
                signature: json.signature,
                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
            });
        },
        error: function () {
            window.alert("加载失败，请过会儿重试，给您带来不便抱歉。");
        }
    });
};
/**
 * @func SHARE.setObject
 * @desc 微信分享初始化
 * @param {object} data 参数对象
 * @param {string} data.title 分享标题
 * @param {string} data.imgUrl 标题图地址
 * @param {string} data.desc 分享描述
 * @param {string} data.audio 音频数据的绝对地址
 * @param {string} data.bdname 百度统计页面名称
 * @param {string} data.bdfunc 百度统计功能
 * @param {string} data.bdvalue 百度统计值
 */
SHARE.setObject = function (data) {
    "use strict";
    var obj_co = {
            title: data.title,
            link: (data.link.length > 0) ? data.link : window.location.href.split("#")[0],
            imgUrl: data.imgUrl,
            success: function (res) {
                if (typeof _hmt !== "undefined") {
                    _hmt.push(["_trackEvent", data.bdname, data.bdfunc, data.bdvalue]);
                }
            },
            cancel: function (res) {
                window.console.log(res.errMsg);
            },
            fail: function (res) {
                window.console.log(res.errMsg);
            }
        },
        obj_co_desc = {
            desc: data.desc
        },
        obj_timeline = $.extend({}, obj_co),
        obj_appmsg = $.extend({
            type: (data.audio.length > 0) ? "music" : "link",
            dataUrl: data.audio
        }, obj_co_desc, obj_co),
        obj_qq = $.extend({}, obj_co_desc, obj_co),
        obj_wb = $.extend({}, obj_co_desc, obj_co),
        obj_qzone = $.extend({}, obj_co_desc, obj_co);
    wx.ready(function () {
        wx.onMenuShareTimeline(obj_timeline);
        wx.onMenuShareAppMessage(obj_appmsg);
        wx.onMenuShareQQ(obj_qq);
        wx.onMenuShareWeibo(obj_wb);
        wx.onMenuShareQZone(obj_qzone);
    });
};

SHARE.init();
SHARE.setObject(obj);
