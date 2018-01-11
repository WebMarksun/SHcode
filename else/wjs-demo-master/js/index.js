/**
 * ITCAST WEB
 * Created by zhousg on 2016/5/6.
 */
$(function(){
    banner();
    initProduct();
    $('[data-toggle="tooltip"]').tooltip();/*需要自己去初始话  工具提示*/
});

/*动态轮播图*/
function banner(){
    /*
    * 1.获取数据       ajax
    * 2.判断当前是什么设备  768px以下都是  移动设备
    * 3根据设备来解析数据  （json转化HTML   字符串拼接  模版引擎  artTemplate native-template "underscorejs template"）
    * 4.渲染在html页面当中  html(解析的字符串);
    * 5.当页面尺寸改变的时候重新渲染   监听页面尺寸的改变  resize
    * */

    var myData;
    /*获取数据*/
    var getData = function(callback){
        if(myData){
            callback && callback(myData);
            return false;
        }
        /*1.获取数据 */
        $.ajax({
            url:'js/index.json',/*相对页面的请求路径*/
            type:'get',
            data:{},
            dataType:'json',
            success:function(data){
                /*当我们做一次请求的时候需要记录*/
                myData = data;
                callback && callback(myData);
            }
        });
    };

    /*渲染*/
    var render = function(){
        /*
        * 2.判断当前是什么设备  768px以下都是  移动设备
        * 3根据设备来解析数据  （json转化HTML   字符串拼接  模版引擎  artTemplate native-template "underscorejs template"）
        * 4.渲染在html页面当中  html(解析的字符串);
        * */

        var width = $(window).width();//获取当前屏幕的宽度

        /*判断当前是不是移动端*/
        var isMobile = false;
        if(width <768 ){//小于768px的时候认为是移动设备
            isMobile = true;
        }

        /*获取数据*/
        getData(function(data){
            /*3根据设备来解析数据 */

            var templatePoint = _.template($('#template_point').html());
            var templateImage = _.template($('#template_image').html());

            var htmlPoint = templatePoint({model:data});
            var htmlImage = templateImage({model:data,isMobile:isMobile});

            /*渲染*/
            $('.carousel-indicators').html(htmlPoint);
            $('.carousel-inner').html(htmlImage);
        });

    };

    /*5.当页面尺寸改变的时候重新渲染   监听页面尺寸的改变  resize*/
    $(window).on('resize',function(){
        render();
    }).trigger('resize');
    /*及时执行  resize  事件*/

    /*6.在移动端  手势滑动*/
    var startX = 0;
    var moveX =0;
    var distanceX = 0;
    var isMove = false;
    $('.carousel-inner').on('touchstart',function(e){
        /*e对象没有直接返回原生的移动端touchEvent对象  originalEvent  返回的是 touchEvent对象  */
        startX = e.originalEvent.touches[0].clientX;
    });
    $('.carousel-inner').on('touchmove',function(e){
        moveX = e.originalEvent.touches[0].clientX;
        distanceX = moveX-startX;
        isMove = true;
    });
    $('.carousel-inner').on('touchend',function(e){
        if( Math.abs(distanceX) > 50 && isMove){
            if(distanceX > 0){/*怎么操作轮播图组件*/
                /*上一张*/
                $('.carousel').carousel('prev');
            }else{
                /*下一张*/
                $('.carousel').carousel('next');
            }
        }

        /*重置参数*/
         startX = 0;
         moveX =0;
         distanceX = 0;
         isMove = false;
    });
}
/*初始化产品页签*/
function initProduct(){
    /*
    * 1.知道所有li的宽度的和
    * 2.ul的宽度设置成和上面的困的一致
    * 3.滑动
    * */

    /*获取页签盒子*/
    var tabs = $('.nav-tabs-product');
    /*所有的li*/
    var lis = tabs.find('li');

    var width = 0;

    $.each(lis,function(i,item){
        width += $(this).innerWidth();
        /*width() 获取的是内容的宽度*/
        /*innerWidth() 获取的是 内容 内边距 的宽度*/
        /*outerWidth() 获取的是 内容 内边距 边框 的宽度*/
        /*outerWidth(true) 获取的是 内容 内边距 边框 外边距 的宽度*/
    });

    console.log(width);

    /*ul的宽度设置成和上面的困的一致*/
    tabs.width(width);


    /*滑动*/
    itcast.iScroll({
        swipeDom:document.querySelector('.nav-tabs-product-parent'),
        swipeType:'x',
        swipeDistance:20
    });
}
