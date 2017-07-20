    $.ajax({
        type: "get",
        async: true,
        url: "http://partner.qianlong.com/chart/api/cshare",
        dataType: "jsonp",
        data: {
            "weburl":location.href.split("#")[0]
        },
        success: function (json) {
            wx.config({
                debug: false,
                appId: json.appId,
                timestamp: json.timestamp,
                nonceStr: json.nonceStr,
                signature: json.signature,
                jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
            });
        },
        error: function () {
            console.log("share error");
        }
    });
    wx.ready(function () {
        var obj_co = {
            title: "兔版头条-兔爷动漫四月大事件",
            link: location.href.split("#")[0],
            imgUrl: "http://comic.qianlong.com/tubanheadline/images/wxshare.jpg",
            success: function () {
                console.log("share successfully");
            },
            cancel: function () { }
        },
        obj_co_desc = {
            desc: "最靓的！最好玩的！最奇葩的！最疯狂的！"
        },
        obj_timeline = $.extend({}, obj_co),
        obj_appmsg = $.extend({}, obj_co_desc, obj_co),
        obj_qq = $.extend({}, obj_co_desc, obj_co),
        obj_wb = $.extend({}, obj_co_desc, obj_co),
        obj_qzone = $.extend({}, obj_co_desc, obj_co);

        wx.onMenuShareTimeline(obj_timeline);
        wx.onMenuShareAppMessage(obj_appmsg);
        wx.onMenuShareQQ(obj_qq);
        wx.onMenuShareWeibo(obj_wb);
        wx.onMenuShareQZone(obj_qzone);
    });