window.onload = function() {
	commonlist();
	$('#myCarousel').carousel({
		//设置自动播放秒
		interval: 100000000000000,
	});
	//    移动端手势
	var startX = 0;
	var moveX = 0;
	var distanceX = 0;
	var isMove = false;
	$('.carousel-inner').on('touchstart', function(e) {
		startX = e.originalEvent.touches[0].clientX;
	});
	$('.carousel-inner').on('touchmove', function(e) {
		moveX = e.originalEvent.touches[0].clientX;
		distanceX = moveX - startX;
		isMove = true;
	});
	$('.carousel-inner').on('touchend', function(e) {
		if (Math.abs(distanceX) > 50 && isMove) {
			if (distanceX > 0) {
				$('.carousel').carousel('prev');
			} else {
				$('.carousel').carousel('next');
			}
		}
		startX = 0;
		moveX = 0;
		distanceX = 0;
		isMove = false;
	});

	//tab切换mobile
	//获取m端配件按钮
	var m_tab_btn_peij = $(".m_tab_btn_peij").children('li');
	//获取m端设备按钮
	var m_tab_btn_sheb = $(".m_tab_btn_sheb").children('li');
	//获取m端维保按钮
	var m_tab_btn_weib = $(".m_tab_btn_weib").children('li');
	var mobile_tab_btn_arr = [m_tab_btn_peij, m_tab_btn_sheb, m_tab_btn_weib];

	m_tab_btn_peij.on('click', function() {
		$('.m_nav_content').slideUp(300);
	});
	m_tab_btn_sheb.on('click', function() {
		$('.m_nav_content').slideUp(300);
	});
	m_tab_btn_weib.on('click', function() {
		$('.m_nav_content').slideUp(300);
	});

	//获取pc端按钮
	var btnLoadImg = $('.xd_pro_List').find('ul').children('li');
	//获取m端按钮
	var m_btnLoadImg = $('.m_nav_content_ul1').find('ul').children('li');
	//右侧分享鼠标移动事件
	$("#chat a").hover(function() {
		if ($(this).prop("className") == "youhui") {
			$(this).children("img.hides").show();
		} else {
			$(this).children("img.hides").show();
			$(this).children("img.shows").hide();
			$(this).children("img.hides").animate({
				marginRight: '0px'
			}, 'slow');
		}
	}, function() {
		if ($(this).prop("className") == "youhui") {
			$(this).children("img.hides").hide('slow');
		} else {
			$(this).children("img.hides").animate({
				marginRight: '-143px'
			}, 'slow', function() {
				$(this).hide();
				$(this).next("img.shows").show();
			});
		}
	});
	//连锁分店tab切换
	var tab_lis = $(".cang_dian_tabtitle");
	var tab_content = $(".cang_dian_tabcon");
	var array_map = [
		[116.48581, 39.866552, "周家庄中路周庄嘉园6号院10号楼对面（近北工大站）"],
		[116.447461, 39.979624, "西坝河中路圣馨家园（近芍药居地铁站）"],
		[116.519818, 39.939701, "青年北路国美第一城3号院负一楼（近青年路地铁站）"],
		[116.237141, 39.882347, "张仪村路康馨家园（近张仪村公交站）"]
	];
	$('.cang_dian_tabtitle ul li').on("click", function() {
		var index = $(this).index();
		$(this).addClass("active").siblings("li").removeClass("active");
		$(".cang_dian_tabcon>ul>li").eq(index).show().siblings("li").hide();
		var map_num = array_map[index];
		maps(map_num[0], map_num[1], map_num[2]);
	});
	maps(array_map[0][0], array_map[0][1], array_map[0][2]);
};

function maps(lng, lat, mess) {
	var map = new BMap.Map("map1"); // 创建Map实例
	var point = new BMap.Point(lng, lat); // 创建点坐标  
	map.centerAndZoom(point, 15); // 初始化地图,用城市名设置地图中心点
	map.enableScrollWheelZoom(true);
	var marker = new BMap.Marker(point); // 创建标注
	map.addOverlay(marker); // 将标注添加到地图中
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	var label = new BMap.Label(mess, {
		offset: new BMap.Size(-100, -50)
	});
	marker.setLabel(label);

	label.setStyle({
		color: "#ca1b2d",
		fontSize: "16px",
		backgroundColor: "1",
		border: "0",
		fontWeight: "bold"
	});
}