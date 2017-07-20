$(function(){
	var ten_btn = $('#ten_btn').find('img'),
		_pop = $('.pop'),
		zhezhao = $('#zhezhao'),
		box_xinfeng = $('#box_xinfeng'),
		_back = $('._back'),
		_success = $('._success');
	var obj = {};
	obj.completeLoading = function(){
		if (document.readyState == "complete") {
			//同意添加animated类名，隐藏所有图片
			$('.section').find("img").addClass('animated');
			$('.section').find("img").css('opacity', '0');
			//设置fullpage页面布局
			$('#fullpage').fullpage({
				afterLoad: function (anchorLink, index) {
					$('.section').removeClass('current');
					var cacheImg = $('.section').eq(index).find('img');
					var cacheImgCurrent = $('.section').eq(index-1).find('img');
					$('.section').eq(index-1).addClass('current');
					if (index  < 10) {
						$('._downImg').css('display','block');
						cacheImg.each(function(i){
							var ele1 =  document.createElement('img');
							ele1.src = './img/' + (index+1) + i + '.png';
							cacheImg.each(function(j){
								$(this).attr('src','./img/'+(index+1)+j+'.png');
							});
						});
					};
					if (index == 1) {
						$('._downImg').css('display','none');
						var music_audio = document.createElement('audio');
						music_audio.src = './music/music.mp3';
						$('audio').attr('src','./music/music.mp3');
						cacheImgCurrent.each(function(i){
							var ele =  document.createElement('img');
							ele.src = './img/1' + i + '.png';
							$(this).attr('src','./img/1'+i+'.png');
						});
					};
					if (index == 10) {
						$('._downImg').css('display','none');
						var pop_img = $('#pop').find('img');
						pop_img.each(function(n){
							$(this).attr('src','./img/pop'+n+'.png');
						})
					};
					setTimeout(function(){
						if (index == 1) {
							$('#loading').hide();
							$('#fullpage').css({'display':'block'});
						};
					},0);
				}
			});
		}
	};
	// 报名的按钮
	obj.sign_up=function(){
		ten_btn.on('click',function(){
			$('.pop').css({'display':'block'});
		});	
	};

	//报名接口的请求
	obj.ajax = function(phone,name){
		$.ajax({
			url:'http://assist.qianlong.com/chart/api/reg_qhgx?callback=',
			dateType:'jsonp',
			type:'post',
			data:{
				phone:phone,
				name:name
			},
			success:function(json){
				var data = eval('('+json+')');
				if (data.result == 1) {//报名成功
					$('.zhezhao').css('display','block');
					box_xinfeng.delay(1000).css({display:'block'}).addClass('animated bounceInDown');
					_success.attr('src','./img/pop7.png');
				}else if (data.result == 0) {//重复报名
					$('.zhezhao').css('display','block');
					box_xinfeng.delay(1000).css({display:'block'}).addClass('animated bounceInDown');
					_success.attr('src','./img/pop8.png');
				}
			}
		});
	}

	// 提交报名信息
	obj._submit = function(){
		$('._submit').on('click',function(){
			var name_ipt = $('.name_ipt').val(),
				num_ipt = $('.num_ipt').val();
			if (name_ipt&& num_ipt) {
				obj.ajax(num_ipt,name_ipt);
			};
		});
	};

	// 返回按钮
	obj._back=function(){
		_back.on('click',function(){
			_pop.css({'display':'none'});
			zhezhao.css({'display':'none'});
			box_xinfeng.css({display:'none'}).removeClass('animated bounceInDown');
			$('#fullpage').css({display:'block'});
			$('.name_ipt').val('');
			$('.num_ipt').val('');
		});	
	};

	// 报名成功按钮
	obj._success=function(){ 
		_success.on('click',function(){
			zhezhao.css({'display':'none'});
			box_xinfeng.css({display:'none'}).removeClass('animated bounceInDown');
			$('#fullpage').css({display:'block'});
		});	
	};
	// 函数初始化
	obj.init = function(){
		obj.sign_up();
		obj._submit();
		obj._back();
		obj._success();
	};

	obj.index = 0;
	obj.audio = function(){
		if (obj.index == 0) {
			$("audio")[0].pause();
			obj.index = 1;
			$("#audio_btn").removeClass('_Animate');
		}else{
			$("audio")[0].play();
			obj.index = 0;
			$("#audio_btn").addClass('_Animate');
		};
	};
	
	document.onreadystatechange = obj.completeLoading;
	obj.init();
	$('#audio_btn').on('click',function(){
		obj.audio();
	});
})