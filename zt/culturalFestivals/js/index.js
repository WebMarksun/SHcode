$(function () {
    var loadNum = 0;
    var bar = setInterval(function () {
        if (loadNum < 100) {
            loadNum = loadNum + 3;
        } else {
            loadNum = 100;
            clearInterval(bar);
            $("#loading-page").addClass("load_hide");
        }
        document.getElementById("number").innerText = loadNum + "%";
    }, 110)
    var player;
    var index = 1;//当前第几页
    var num = 6; //一共多少页
    // for(var i = 0;i<5;i++ ){
    //     var audioload = document.createElement("audio");
    //     audioload.src="./images/"+i+".mp3";
    // }
    var audio = document.getElementById("audioplay");
    // 插件
    var bookwidth = $("body").width() * 2;
    var bookheight = $("body").height() * 0.677;
    $(".book_big").css({
        "width": bookwidth / 2,
        "height": bookheight
    })
    $("#flipbook").turn({
        width: bookwidth,
        height: bookheight,
        duration: 2000,
        autoCenter: true
    });

    //loading-page
    $(".load_barchoose").addClass("animatbar");
    setTimeout(function () {
        $("#loading-page").hide();
        $(".book_small")
            .addClass("animation_smallbook")
            .on("webkitAnimationStart AnimationStart", function () {
                //小书动画
                $(".homepage_text").addClass("hometext_hide");
                $(".book_big")
                    .addClass("animation_bigbook")
                    .one("webkitAnimationStart AnimationStart", function () {
                        // 大书出现动画完成
                        setTimeout(function () {
                            $("")
                            $(".box").css("opacity", 1);
                            $(".radius_btn").show();
                            // 点击翻开第一页并播放第一段录音
                            $(".radius_btn").one('click', function () {
                                audio.play();
                                $(".radius_btn").hide();
                                console.log(index);
                                index++;
                                $(".book_big")
                                    .addClass("animation_openbook")
                                    .one("webkitAnimationEnd AnimationEnd", function () {
                                        // audio.play();
                                        //点击书页下一页并播放录音
                                        $(".home_page").on("click touchstar", function () {
                                            console.log(index);
                                            if (index <= num) {
                                                audio.src = "./images/" + index + ".mp3"
                                                audio.play();
                                                // player = setTimeout(function () {
                                                    // audio.play();
                                                // }, 2000)
                                                index++;
                                                $('#flipbook').turn('next');
                                            } else {
                                                audio.src = ""
                                                index++;
                                                theNextFun();
                                                $(".home_page").unbind();
                                            }
                                        })
                                    });
                            })


                        }, 1900)
                    })
                $(".homepage_bg")
                    .addClass("homebg_hide")
                    .on("webkitAnimationEnd AnimationEnd", function () {
                        $(".book_small").hide()
                    });
            });

    }, 6000)

    // 分享页按钮
    $(".end_share").on('click', function () {
        $("#pop").show();
    })
    $(".end_again").on('click', function () {
        window.location.reload();
    })
    $("#pop").on("click", function () {
        $(this).hide();
    })


    // 音乐按钮控制
    var obj = {
        index: 0,
        audio: function () {
            if (obj.index == 0) {
                $("#audiobg")[0].pause();
                obj.index = 1;
                $("#audio_btn").removeClass('Animate');
            } else {
                $("#audiobg")[0].play();
                obj.index = 0;
                $("#audio_btn").addClass('Animate');
            };
        }
    };
    if(/(iPhone|iPod)/i.test(navigator.userAgent)){
        console.log(/(iPhone|iPod)/i.test(navigator.userAgent));
        $("#audio_btn").removeClass('Animate');
        obj.index = 1;
    }
    $('#audio_btn').on('click', function () {
        console.log(obj.index);
        obj.audio();
    });
})




//书合上
var theNextFun = function () { 
    $(".book_big")
        .addClass("animation_bigbook2")
        .on("webkitAnimationStart AnimationStart", function () {
            setTimeout(function () {
                $(".box").hide();
            }, 1900)
            //home_page消失
            $(".home_page")
                .addClass("homewraphide")
                .on("webkitAnimationStart AnimationStart", function () {
                    setTimeout(function () {
                        //书变小返回
                        $(".end_book")
                            .addClass("bookback")
                            .on("webkitAnimationEnd AnimationEnd", function () {
                                $(".end_text").addClass("endbookshow"); 
                                $(".end_btn").fadeIn(1000);
                                $("#audioplay")[0].src = "./images/end.mp3"
                                $(".end_text").one('click',function(){
                                    $("#audioplay")[0].play();
                                })
                                $("#audioplay")[0].play();
                                setTimeout(function () {
                                    // 树叶落下
                                    $(".end_leaf").addClass("fallenLeaf");
                                }, 1000)
                            });
                    }, 2500)
                });
            //wrap消失
            $(".wrap")
                .addClass("homewraphide")
                .on("webkitAnimationEnd AnimationEnd", function () {

                }).on("webkitAnimationEnd AnimationEnd", function () {
                    setTimeout(function () {
                        $(".home_page").hide();
                        $(".wrap").hide();

                    }, 500)
                });
        })
}