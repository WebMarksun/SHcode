$(document).ready(function () {
	//监听加载状态改变
	document.onreadystatechange = completeLoading;
	//加载状态为complete时移除loading效果
	function completeLoading() {
		if (document.readyState == "complete") {
			//设置fullpage页面布局
			setTimeout(function () {
				$('#fullpage').fullpage({
					// 设置背景色
					// sectionsColor: ['#ffffff', '#2AB561', '#DE8910', '#16BA9D', '#ffffff'],
					afterLoad: function (anchorLink, index) {
						$('.section').removeClass('current');
						// 延时100毫秒执行
						setTimeout(function () {
							$('.section').eq(index - 1).addClass('current');
							var cacheImg = $('.gifnone').length;
							var cacheNum = index + 1;
							if (index - 1 < cacheImg) {
								$('.gifnone').eq(index - 1).attr('src', './image/gif' + cacheNum + '.gif');
								console.log(cacheImg);
								console.log(cacheNum);
							}
							$('.gif').css({ 'opacity': '0' });
							$('.section').eq(index - 1).find('.gif').attr('src', './image/gif' + index + '.gif')
							$('.section').eq(index - 1).find('.gif').css({ 'opacity': 1 });
						}, 100);
					}
				});
				$('#loading').hide();
			},2000)
		}
	}
	// 音乐按钮控制
	var obj = {
		index: 0,
		audio: function () {
			if (obj.index == 0) {
				$("audio")[0].pause();
				obj.index = 1;
				$("#audio_btn").removeClass('Animate');
			} else {
				$("audio")[0].play();
				obj.index = 0;
				$("#audio_btn").addClass('Animate');
			};
		}
	};
	$('#audio_btn').on('click', function () {
		obj.audio();
	});

})
