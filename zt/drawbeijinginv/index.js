$(document).ready(function () {
    $('#main').fullpage({
        afterLoad: function (anchorLink, index) {
            if (index === 7) {
                $('.arrow').fadeOut();
            } else {
                $('.arrow').fadeIn();
            }
        }
    });
    $('html').fadeIn();
    $('.cover').find('img').each(function (index, element) {
        $(element).delay(index * 1000).fadeIn();
    });
    $('.txt-enter').click(function () {
        $('.cover').fadeOut();
    });
    $('.btn-enroll').click(function () {
        $('.submit').fadeIn();
    });
    $('.btn-back').click(function () {
        $('.submit').fadeOut();
    });
    $('.btn-submit').click(function () {
        var uname = $('input[name=uname]').val(),
            tel = $('input[name=tel]').val();
        $.post('http://cgi.qianlong.com/diaocha/2016qinghuabeijing/save.asp', 'uname=' + uname + '&tel=' + tel, function () {});
        window.alert('报名成功，感谢参与！');
    });
});
