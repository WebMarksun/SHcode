$(function () {
  var baseUrl = 'http://comictest.qianlong.com/';
  $.ajax({
    type: "get",
    url: "http://partner.qianlong.com/chart/api/cshare",
    dataType: "jsonp",
    data: {
      "weburl": location.href.split("#")[0]
    },
    success: function (json) {
      wx.config({
        debug: false,
        appId: json.appId,
        timestamp: json.timestamp,
        nonceStr: json.nonceStr,
        signature: json.signature,
        jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'startRecord', 'stopRecord', 'onVoiceRecordEnd', 'playVoice', 'pauseVoice', 'stopVoice', 'onVoicePlayEnd', 'uploadVoice', 'downloadVoice']
      });
    },
    error: function () {
      console.log("share error");
    }
  });
  wx.ready(function () {
    var obj_co = {
      title: "2017情话端午—邀你朗读",
      link: baseUrl + "cyh/loveDW201705/index.html",
      imgUrl: baseUrl + "cyh/loveDW201705/img/share.png",
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

    // 4.4 监听录音自动停止
    wx.onVoiceRecordEnd({
      complete: function (res) {
        voice.localId = res.localId;
        $('._cp').removeClass('xuanzhuan');
        $('#bottom_btns').children('div').css({ 'display': 'none' });
        $('#bottom_btns').find('#third').css({ 'display': 'block' });
      }
    });
    // 4.8 监听录音播放停止
    wx.onVoicePlayEnd({
      complete: function (res) {
        // alert('诗歌播放结束');
      },
      success: function () {
        $('._cp').removeClass('xuanzhuan');
        $('#playVoice').attr('src', './img/shiting.png');
      }
    });
  });
  wx.error(function (res) {
    alert(res.errMsg);
  });
});

var voice = {
  localId: '',
  serverId: ''
};
var setTime;
var time = 60;

$(function () {
  var _content = $('#_content'),
    _title = _content.find('#_title'),
    _text = $('#_text'),
    _showDiv = _text.find('div'),
    bottom_btns = $('#bottom_btns'),
    _first = bottom_btns.find('#first'),
    _second = bottom_btns.find('#second'),
    _third = bottom_btns.find('#third'),
    _fanhui = bottom_btns.find('._fanhui'),
    _jindutiao = $('#_jindutiao'),
    _time60 = $('#_60'),
    _time_jindu = $('#time_jindu'),
    _cp = $('._cp'),
    _chonglu = $('#_chonglu');

  var getUrlParam = function (paramName) {
    var reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
  }
  var obj = {
    realIndex: getUrlParam('poemNum') || 0,
    arr: ['浣溪沙（宋·苏轼）', '渔家傲（宋·欧阳修）', '《端午的鸭蛋》（汪曾祺）', '《雅舍谈吃》（梁实秋）', '《端午节，怀念一个人》（谷禾）'],
    imgArr: ['./img/c-huanxisha.png', './img/c-yujiaao.png', './img/c-wzq.png', './img/c-yashetanchi.png', './img/c-huainianyigeren.png'],
    init: function () {
      obj.showFun();
      // 点击函数
      obj.clkFun();
    },
    showFun: function () {
      _title.text(obj.arr[obj.realIndex]);
      _showDiv.css({ 'display': 'none' });
      _cp.attr('src', obj.imgArr[obj.realIndex]);
      _showDiv.eq(obj.realIndex).css({ 'display': 'block' });
    },
    timeFun: function () {
      setTime = setInterval(function () {
        time--;
        _time60.text(time + 's');
        if (time < 1) {
          _jindutiao.addClass('_jindutiao').removeClass('width_animation');
          _time60.text('60s');
          clearInterval(setTime);
          // return;
        }
      }, 1000);
    },
    startRecordFun: function () {
      wx.startRecord({
        success: function (res) {
          time = 60;
          $('._cp').addClass('xuanzhuan');
          $('#playVoice').attr('src', './img/shiting.png');
          bottom_btns.children('div').css({ 'display': 'none' });
          _second.css({ 'display': 'block' });
          _jindutiao.addClass('_jindutiao width_animation');
          obj.timeFun();
        },
        cancel: function () {
          alert('用户拒绝授权录音');
        }
      });
    },
    //停止录音
    stopRecordFun: function () {
      wx.stopRecord({
        success: function (res) {
          voice.localId = res.localId;
          _jindutiao.addClass('_jindutiao').removeClass('width_animation');
          _time60.text('60s');
          $('._cp').removeClass('xuanzhuan');
          $('#bottom_btns').children('div').css({ 'display': 'none' });
          $('#bottom_btns').find('#third').css({ 'display': 'block' });
          clearInterval(setTime);
          return false;
        },
        fail: function (res) {
          alert('失败')
        }
      });
    },
    pauseVoiceFun: function () {
      //暂停播放录音
      wx.pauseVoice({
        localId: voice.localId
      });
    },
    uploadVoiceFun: function () {
      if (voice.localId == '') {
        alert('请先录制一段诗歌');
        return;
      };
      // 上传
      wx.uploadVoice({
        localId: voice.localId,
        success: function (res) {
          voice.serverId = res.serverId;
          //停止播放
          wx.stopVoice({
            localId: voice.localId,
            success: function (res) {
              // $('._cp').addClass('xuanzhuan');
              // $('#playVoice').attr('src','./img/shiting.png');
              window.location.href = './shareing.html?poemNum=' + obj.realIndex + '&voice.serverId=' + voice.serverId;
            }
          });
        }
      });
    },
    clkFun: function () {
      // 4.2 开始录音
      document.querySelector('#startRecord').onclick = function () {
        obj.startRecordFun();
      };
      // 4.3 完成停止录音
      document.querySelector('#stopRecord').onclick = function () {
        obj.stopRecordFun();
      };
      // 4.5 试听播放音频
      document.querySelector('#playVoice').onclick = function () {
        var _this = $(this);
        if (voice.localId == '') {
          alert('请先录制一段诗歌');
          return;
        };
        //播放
        wx.playVoice({
          localId: voice.localId,
          success: function () {
            $('._cp').addClass('xuanzhuan');
            _this.attr('src', './img/shitingzhong.png');
          }
        });
      };
      // 4.8 保存上传语音
      document.querySelector('#uploadVoice').onclick = function () {

        if (voice.localId == '') {
          alert('请先使用 startRecord 接口录制一段声音');
          return;
        }

        wx.stopVoice({
          localId: voice.localId,
          success: function (res) {
            $('._cp').addClass('xuanzhuan');
            $('#playVoice').attr('src', './img/shiting.png');
          }
        });
        wx.uploadVoice({
          localId: voice.localId,
          success: function (res) {
            voice.serverId = res.serverId;
            window.location.href = "http://comictest.qianlong.com/sh/loveDW201705/shareing.html?poemNum=" + obj.realIndex + '&voice.serverId=' + voice.serverId;
          }
        });
      }
      //重录
      document.querySelector('#_chonglu').onclick = function () {
        _jindutiao.addClass('_jindutiao').removeClass('width_animation');
        _time60.text('60s');
        $('#bottom_btns').children('div').css({ 'display': 'none' });
        $('#bottom_btns').find('#first').css({ 'display': 'block' });
        //停止播放录音
        wx.stopVoice({
          localId: voice.localId
        });
      };
      //返回
      $('._fanhui').eq(1).on('click', function () {
        wx.stopRecord({
          success: function (res) {
            voice.localId = res.localId;
            time = 60;
            _jindutiao.addClass('_jindutiao').removeClass('width_animation');
            _time60.text('60s');
            clearInterval(setTime);
            return false;
          },
          fail: function (res) {
            alert('失败')
          }
        });
        window.location.href = './index.html';
        // window.location.href = 'index.html';
      });
      $('._fanhui').eq(0).on('click', function () {
        time = 60;
        window.location.href = './index.html';
      });
    }
  }
  obj.init();
});
