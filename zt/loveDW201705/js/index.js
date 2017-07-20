$(function(){
   var swiper = new Swiper('.swiper-container', {
      loop:true,
      effect: 'flip',
      grabCursor: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
   });
   swiper.activeLoopIndex = 0;
   $('#btn_wyds').click(function(){
      window.location.href = 'recording.html?poemNum='+swiper.realIndex
   });
});

$(function(){
   var baseUrl = 'http://comictest.qianlong.com/';
   $.ajax({
      type: "get",
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
            jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone','startRecord','stopRecord','onVoiceRecordEnd','playVoice','pauseVoice','stopVoice','onVoicePlayEnd','uploadVoice','downloadVoice']
         });
      },
      error: function () {
         console.log("share error");
      }
   });
   wx.ready(function () {
      var obj_co = {
         title: "2017情话端午-邀你朗读",
         link: window.location.href,
         imgUrl: baseUrl+"cyh/loveDW201705/img/share.png",
         success: function () {
            console.log("share successfully");
         },
         cancel: function () { }
      },
      obj_co_desc = {
         desc: "棕子香，香厨房。艾叶香，香满堂。"
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
});
