var commonlist = function () {

    //移动端下拉菜单显示（首页、产品介绍等）
    $(".m_nav_content").hide();
    $(".m_nav_icon").on("click", function () {
        $(".m_nav_content").slideToggle(300);
        //点击空白处隐藏。
        $(document).on('click', function (event) {
            var list = $(".m_nav_content");// 设置目标区域
            var m_nav_icon = $(".m_nav_icon");
            if (!list.is(event.target) && list.has(event.target).length === 0 && !m_nav_icon.is(event.target)) { // Mark 1
                $('.m_nav_content').slideUp(300);          //淡出消失
            }
        });
    });
    //移动端一级分类显示（动车、客车、城轨）
    $(".m_nav_content_ul1").hide();
    $(".about_m_List").children("a").click(function () {
        $(".m_nav_content_ul1").slideToggle(300);
    });
    //移动端二级分类展示（配件、设备、维保）
    $(".m_nav_content_ul2").hide();
    $(".m_nav_content_ul1").children("li").children("h4").click(function () {
        $(this).parent("li").children(".m_nav_content_ul2").slideToggle(300);
        $(this).parent("li").siblings("li").children(".m_nav_content_ul2").hide(300);
    });
    //移动端三级分类展示（温控系统等）
    $(".m_nav_content_ul3").hide();
    $(".m_nav_content_ul2").children("li").children("h5").click(function () {
        $(this).parent("li").children(".m_nav_content_ul3").slideToggle(300);
        $(this).parent("li").siblings("li").children(".m_nav_content_ul3").hide(300);
    });
    //标头样式
    $('#list_content').on('mouseover', function () {
        $(".xd_pro_List").show().on('mouseleave', function () {
            $(this).hide();
        });
        $(this).siblings('li').on('mouseover', function () {
            $(".xd_pro_List").hide();
        });
    });
    //窗口改变重新加载
    //$(window).on("resize", function () {
    //    location.reload();
    //});


    //解决列表因浮动撑不起父盒子问题
    $('.pei_re').on('mouseover', function () {
        var reheight = $(this).parents('ul').height();
        var height = $(this).find('.pei_List').height();
        if (reheight > height) {
            height = reheight;
        }
        console.log(height);
        $(this).parents('ul').parents('.xd_pro_List_type').css('height', height);
        $(this).on('mouseout', function () {
            $(this).parents('ul').parents('.xd_pro_List_type').css('height', 'auto');
        })
    });

};


//获取url中的某个参数
var getUrlParam = function (paramName) {
    var reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
};


//tab定位
var tab_location = function (num, index, contentObjsArr) {
    $.each(contentObjsArr, function (contentnum, contentObjs) {
        contentObjs.hide();
        if (num == contentnum) {
            $(contentObjs[index]).show();
            //$.each(contentObjs, function (contentindex, content) {
            //    if (contentindex == index) {
            //        $(content).show();
            //    }
            //})
        }
    })
};

//设置其他页面跳转product的url
var setprobucturl = function (btnarr, btnLoadImg, url) {
    var urlJSON = '';
    $.each(btnarr, function (num, tabbtnObjs) {
        $.each(tabbtnObjs, function (index, item) {
            $(item).on('click', function () {
                urlJSON = url + '?&num=' + num + '&index=' + index;
                // window.location.href = urlJSON;
                console.log(urlJSON);
            })
        })
    });
    $.each(btnLoadImg, function (imgboxIndex, item) {
        $(item).on('click', function () {
            urlJSON += '&imgboxIndex=' + imgboxIndex;
            console.log(urlJSON);
            window.location.href = urlJSON;
        });
    })

};


//点击tab加载相应的图片
var tabLoadImg = function (index) {
    // console.log($(this));
    // console.log($('.xd_pr_content').children('div'));
    var imgbox = $('.xd_pr_content').children('div');
    $(imgbox[index]).find('img').each(function (i, item) {
        var srcstr = $(item).attr('data-src');
        $(item).attr('src', srcstr);
        console.log(item);
    })
}
