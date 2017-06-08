$(function () {
	var baseUrl = 'http://comictest.qianlong.com/';
	// 4.5 播放音频
	var playVoice = function () {
		if (voice.localId == '') {
			alert('页面加载中稍后重试');
			return;
		}
		wx.playVoice({
			localId: voice.localId,
			success: function () {
				$(".sh_playbtn").hide();
				$('.sh_pausebtn').show();
				$(".sh_record_b").addClass("sh_playing");
				$(".sh_record_s").addClass("sh_playing");
			}
		});
	};

	// 4.6 暂停播放音频
	var pauseVoice = function () {
		wx.pauseVoice({
			localId: voice.localId,
			success: function () {
				$(".sh_pausebtn").hide();
				$('.sh_playbtn').show();
				$(".sh_record_b").removeClass("sh_playing");
				$(".sh_record_s").removeClass("sh_playing");
			}
		});
	};

	// 4.7 停止播放音频
	var stopVoice = function () {
		wx.stopVoice({
			localId: voice.localId,
			success:function () {
				window.location.href = "http://comictest.qianlong.com/sh/loveDW201705/";
			}
		});
	};

	// 4.9 下载语音
	var downloadVoice = function () {
		// alert(window.location)
		if (voice.serverId == '') {
			// alert('请先使用 uploadVoice 上传声音');
			return;
		}
		wx.downloadVoice({
			serverId: voice.serverId,
			success: function (res) {
				// alert('下载语音成功，localId 为' + res.localId);
				voice.localId = res.localId;
			},
			complete: function (res) {
				// alert(JSON.stringify(res) + 'complete');
			},
			fail: function (res) {
				// alert(JSON.stringify(res) + 'fail');
			}
		});
	};
	//获取url中的某个参数
	var getUrlParam = function (paramName) {
		var reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = window.location.search.substr(1).match(reg); //匹配目标参数
		if (r != null) return unescape(r[2]);
		return null; //返回参数值
	}

	$(".sh_share_btn").on('click', function () {
		$(".pop").show();
	})
	$('.pop').on('click', function () {
		$(this).hide();
	})
	if ($('.sh_readagain_btn')) {
		$('.sh_readagain_btn').on('click', function () {
			stopVoice();
		})
	}
	if ($('.sh_relay_btn')) {
		$('.sh_relay_btn').on('click', function () {
			stopVoice();
		})
	}
	var poemNum = getUrlParam('poemNum');

	var poemnames = ["浣溪沙（宋·苏轼）", "渔家傲（宋·欧阳修）", "节选《端午的鸭蛋》汪曾祺", "节选《雅舍谈吃》梁实秋", "节选《端午节，怀念一个人》谷禾"];
	var bgcsrcs = ["./img/sh-huanxisha.png", "./img/sh-yujiaao.png", "./img/sh-duanwudeyadan.png", "./img/shyashetanchi.png", "./img/sh_huainianyigeren.png"];
	$(".sh_record_s").attr("src", bgcsrcs[poemNum])
	$.each(poemnames, function (index, name) {
		if (poemNum == index) {
			poemname = name;
		}
	})
	$.each(bgcsrcs, function (index, name) {
		if (poemNum == index) {
			$(".sh_record_s").attr("src", name)
		}
	})
	$(".sh_poetry_name").html(poemname);
	$.ajax({
		type: "get",
		async: true,
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
		voice = {
			serverId: getUrlParam("voice.serverId"),
			localId: ''
		};
		var obj_co = {
			title: "2017情话端午—邀你朗读",
			link: baseUrl+"cyh/loveDW201705/shared.html?voice.serverId=" + voice.serverId + "&poemNum=" + getUrlParam("poemNum"),
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

		// 4.8 监听录音播放停止
		wx.onVoicePlayEnd({
			complete: function (res) {
				// alert('录音（' + res.localId + '）播放结束');
			},
			success: function () {
				$('.sh_pausebtn').hide();
				$('.sh_playbtn').show();
				$(".sh_record_b").removeClass("sh_playing");
				$(".sh_record_s").removeClass("sh_playing");
			}
		});
		// alert(location.href);
		// alert(location.href.split("#")[0]);
		// alert("1"+getUrlParam("voice.serverId"));
		downloadVoice();
		$(".sh_playbtn").on('click', function () {
			playVoice();
		})
		$(".sh_pausebtn").on('click', function () {
			pauseVoice();
		})


	});

	wx.error(function (res) {
		// alert(res.errMsg);
	});

	$.ajax({
		type: "get",
		async: true,
		url: "http://partner.qianlong.com/chart/api/get_voice_data",

		data:{
			media_id:"NyJ66dHU0-MsDlsFbEZD2JKeoIG0vscV8P-OhLd03wBzm9lydzzMRLP5AB-RkkB7"
		},
		dataType: "jsonp",
		success: function (json) {
			console.log(1111111111111111111111111111111111);
			console.log(json);
		},
		error: function () {
			console.log("share error");
		}
	});
})
