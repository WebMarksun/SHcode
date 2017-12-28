$(function() {
    //loading列表
    var loader = new window.PxLoader();
    var basePath = "./images/";
    //声明资源文件列表
    var fileList = [
        'bg.png',
        '7-tree.png',
        'lotusleaf.png',
        'ship.png',
        'water.png',
        'bg1.jpg',
        'button.png',
        'buttontext.png',
        'flowermove.png',
        'homebg.png',
        'homebtn.png',
        'homecloud.png',
        'homeico.png',
        'hometext.png',
        'joincloud1.png',
        'joincloud2.png',
        'joincloud3.png',
        'lastpage.png',
        'leaf9.png',
        'leafup.png',
        'leafdown.png',
        'leafwater.png',
        'loadship.png',
        'loadwater.png',
        'lotusleaf.png',
        'ship.png',
        'snow10.png',
        'snow11.png',
        'snow12.png',
        'water.png',
        'share.png',
        'backhome.png',
        'homeintro.png',
        'guideico.png',
        'loadingty.png',
        'shareico.png'
    ];
    var arrindex = [4, 7, 3, 4, 3, 4, 9, 2, 4, 5, 2, 3, 12];
    for (var i = 0; i <= 12; i++) {
        for (var j = 1; j <= arrindex[i]; j++) {
            var str = i + '-' + j + '.png';
            fileList.push(str);
            console.log(str);
        }
    }
    for (var i = 0; i < fileList.length; i++) {
        var pxImage = new PxLoaderImage(basePath + fileList[i]);
        pxImage.imageNumber = i + 1;
        loader.add(pxImage);
    }
    loader.addProgressListener(function(e) {
        var percent = Math.floor(e.completedCount / e.totalCount * 100);
        $(".loadtext").html(percent + " %");

    });
    loader.addCompletionListener(function() {
        $("#loadpage").css({ display: 'none' });
        $("#notshow").css({ display: 'none' });

        $(".homebg")
            .addClass("homeani")
            .one("webkitAnimationEnd AnimationEnd", function() {
                $(".hometext")
                    .addClass("homeani")
                    .one("webkitAnimationEnd AnimationEnd", function() {
                        $(".homebtnbox").addClass('homeani');
                        $(".homecloud1").addClass('homecloudmove1');
                        $(".homecloud2").addClass('homecloudmove2');
                    })
            })

    });
    loader.start();

    //左滑
    $(".homebtn").on('touchmove', function() {
        imgH = $(".box").height();
        psTop = Math.ceil(screenH / imgH * 100) - 100;
        //音乐播放
        var audio = $("audio")[0];
        audio.play();
        $(".move").css({
            'top': Math.ceil(screenH / imgH * 100) + '%'
        });
        $(".tracloud1").addClass("tracloudmove1");
        $(".tracloud2").addClass("tracloudmove2");
        $(".tracloud3").addClass("tracloudmove3");
        $(".move").addClass('homein') //添加过渡动画然后
            .one("webkitAnimationEnd AnimationEnd", function() {
                $(".move").css({
                    'top': '0%'
                });
                $(".move").removeClass('homein');
            });
        $("#homepage").addClass('homemove')
            .one("webkitAnimationEnd AnimationEnd", function() {
                $(".buttonbox").addClass('homeani')
            });
    })


    window.ontouchstart = function(e) {
        e.preventDefault();
    };
    var screenH = $(".screen").height();
    var imgH;
    console.log(screenH + ":" + imgH);
    var psTop;
    var nowtop = 0;
    var timer;
    $(".button").on('touchstart', function(e) {
        $(".buttontext").hide();
        e.preventDefault(e);
        if (!timer) {
            timer = setInterval(function() {
                // console.log(nowtop + ":" + psTop);
                if (nowtop < psTop || nowtop == psTop) {
                    //滑动到头
                    $("#lastpage").addClass('lastin');
                    clearInterval(timer);
                    $(".button").unbind();
                    $(".move").addClass('lastout');
                    //加过渡云彩
                    $(".tracloud1-1").addClass('tracloudmove1-1');
                    $(".tracloud1-2").addClass('tracloudmove1-2');
                }
                nowtop -= 0.03;
                $(".move").css({
                    'top': nowtop + '%'
                });
                switch (Math.floor(nowtop * 10) / 10) {
                    case -0.6:
                        $(".text1").addClass('fadeIn');
                        break;
                    case -7.6:
                        $(".text2").addClass('fadeIn');
                        break;
                    case -17.8:
                        $(".text3").addClass('fadeIn');
                        break;
                    case -24.4:
                        $(".text4").addClass('fadeIn');
                        break;
                    case -32.5:
                        $(".ship").addClass('shipmove');
                        $(".water").addClass('watermove');
                        $(".text5").addClass('fadeIn');
                        break;
                    case -39.5:
                        $(".text6").addClass('fadeIn');
                        break;
                    case -45:
                        $(".text7").addClass('fadeIn');
                        break;
                    case -55:
                        $(".text8").addClass('fadeIn');
                        break;
                    case -65.7:
                        $(".text9").addClass('fadeIn');
                        break;
                    case -72.5:
                        $(".text10").addClass('fadeIn');
                        break;
                    case -82:
                        $(".text11").addClass('fadeIn');
                        break;
                    case -87.7:
                        $(".text12").addClass('fadeIn');
                        break;
                    default:
                        break;
                }
                console.log(nowtop);
                console.log("time:" + new Date().getTime());
            }, 20)
            console.log(timer);
        }
    })
    $(".button").on('touchend', function() {
        clearInterval(timer);
        timer = 0;
        console.log(timer);
    })

    //横屏竖屏问题
    function set_html_fontsize() {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        h < w ? $('#scrrol').show() : $('#scrrol').hide();
    }
    window.orientationchange = function() {
        set_html_fontsize()
    };
    window.onresize = function() {
        set_html_fontsize()
    };
    set_html_fontsize();

    //动画

    var musictimer = imageA({ num: 0, targetI: $(".music_btn"), indexs: 4, time: 300, loop: true }) //音乐按钮
    imageA({ num: 1, targetI: $(".group1"), indexs: 7, time: 400, loop: true })
    imageA({ num: 2, targetI: $(".group2"), indexs: 3, time: 400, loop: true })
    imageA({ num: 3, targetI: $(".group3"), indexs: 4, time: 400, loop: true })
    imageA({ num: 4, targetI: $(".group4"), indexs: 3, time: 400, loop: true })
    imageA({ num: 5, targetI: $(".group5"), indexs: 4, time: 400, loop: true })
    imageA({ num: 6, targetI: $(".group6"), indexs: 9, time: 400, loop: true }) //6组彩虹
    imageA({ num: 7, targetI: $(".group7"), indexs: 2, time: 400, loop: true }) //6组后荷叶
    imageA({ num: 8, targetI: $(".group8"), indexs: 4, time: 400, loop: true }) //6组荷花
    imageA({ num: 9, targetI: $(".group9"), indexs: 5, time: 400, loop: true }) //6组水珠
    imageA({ num: 10, targetI: $(".group10"), indexs: 2, time: 400, loop: true }) //10组灯笼
    imageA({ num: 11, targetI: $(".group11"), indexs: 3, time: 400, loop: true }) //12组积雪

    //音乐自动播放
    var audio = $("audio")[0];
    document.addEventListener('WeixinJSBridgeReady', function() {
            audio.play();
            audio.pause();
            audio.play();
        })
        //音乐按钮
    $(".music_btn").on('touchend', function() {
            if (audio.paused) {
                console.log(musictimer);
                musictimer = imageA({ num: 0, targetI: $(".music_btn"), indexs: 4, time: 300, loop: true })
                audio.play();
            } else {
                // console.log(musictimer);
                clearInterval(musictimer);
                audio.pause();
            }
        })
        //尾页点击按钮
    $(".share").on('touchend', function() {
        $("#shade").show();
    })

    $(".backhome").on('touchend', function() {
        window.location.reload();
    })
    $("#shade").on('touchend', function() {
        $(this).hide();
    })
})


/**
 * obj.num 当前第几组
 * obj.targetI 当前操作对象
 * obj.indexs 当前共几张图片
 * obj.time 变换的时间
 * obj.loop 是否循环播放
 */
function imageA(obj) {
    var i = 0;
    var timer = setInterval(function() {
        i++;
        obj.targetI.attr('src', './images/' + obj.num + '-' + i + '.png');
        if (i == obj.indexs) {
            if (obj.loop) {
                i = 0;
            } else {
                clearInterval(timer);
            }
        }
    }, obj.time)
    return timer;
}