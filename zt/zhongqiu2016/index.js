$(document).ready(function () {
    $('#main').fullpage({
        afterLoad: function (anchorLink, index) {
            if (index === 7) {
                $('.txt').fadeIn();
            }
        }
    });
    $('html').fadeIn();
    $('#main .cover .title').delay(1000).fadeIn();
    $('.btn').click(function () {
        $('.result').fadeIn();
        [23, 15, 10, 52].forEach(function (element, index) {
            $('.graph li').eq(index).find('.process').animate({
                width: element + '%'
            }, 1000);
            $('.graph li').eq(index).find('.num').animate({
                left: element - 3 + '%'
            }, 1000);
        });
    })
});
