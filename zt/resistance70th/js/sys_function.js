/*globals $, alert, console */
var imgW,
    imgH = [],
    pbW,
    pbH;
function setStyle() {
    "use strict";
    imgW = 1188;
    imgH = [
        536,
        266,
        495,
        392,
        1130,
        610,
        1562,
        573,
        425,
        398,
        796,
        544,
        503,
        317,
        1783
    ];
    pbW = window.innerWidth * 0.72 * 0.96 * 0.73;
    pbH = window.innerHeight * 0.76 * 0.67;
/*
    var p2_3 = $("#p2-3")[0];
    p2_3.onmouseover = function () {
        p2_3.src = "img/Asia-2.png";
    };
    p2_3.onmouseout = function () {
        p2_3.src = "img/Asia-1.png";
    };
*/
    $("#pb1").perfectScrollbar();
}

function showPage(c, x) {
    "use strict";
    var i,
        p = ["p", "ps", "pb"],
        ph = ["page", "page-sub", "page-box"],
        page = $("#" + p[c] + x),
        pageHide = $("." + ph[c]);
    if (c === 0) {
        pageHide.hide();
        page.fadeIn("slow");
    } else {
        pageHide.hide();
        page.show();
    }
}

function changePage(x) {
    "use strict";
    var ps2_1 = $("#ps2-1")[0],
        ps2_2 = $("#ps2-2")[0],
        ps2_3 = $("#ps2-3")[0],
        ps2_4 = $("#ps2-4")[0],
        pb1_1 = $("#pb1-1")[0],
        pb1_2 = $("#pb1-2")[0],
        pb1_3 = $("#pb1-3")[0],
        pb1 = $("#pb1"),
        index = $(".index");
    if (x === "1935") {
        ps2_2.src = "img/time_line1.png";
        index.each(function (index, item) {
            item.alt = 1931 + index;
            item.style.display = "block";
        });
    }
    if (x === "1936" || x === "1939") {
        ps2_2.src = "img/time_line2.png";
        index.each(function (index, item) {
            item.alt = 1935 + index;
            item.style.display = "block";
        });
    }
    if (x === "1940" || x === "1943") {
        ps2_2.src = "img/time_line3.png";
        index.each(function (index, item) {
            item.alt = 1939 + index;
            item.style.display = "block";
        });
    }
    if (x === "1944") {
        ps2_2.src = "img/time_line4.png";
        index.each(function (index, item) {
            item.alt = 1943 + index;
            if (index > 2) {
                item.style.display = "none";
            } else {
                item.style.display = "block";
            }
        });
    }
    ps2_1.src = "img/title_year" + x + ".png";
    pb1_1.src = "img/" + x + "_text.png";
    if (x === "1938" || x === "1941" || x === "1944") {
        pb1_2.style.display = "none";
        pb1_3.style.display = "none";
        ps2_3.style.display = "none";
    } else if (x === "1945") {
        pb1_2.src = "img/photo1945.jpg";
        pb1_2.style.display = "block";
        pb1_3.style.display = "block";
        ps2_3.style.display = "block";
        
    } else {
        pb1_2.src = "img/photo" + x + ".jpg";
        pb1_2.style.display = "block";
        pb1_3.style.display = "none";
        ps2_3.style.display = "none";
    }
    pb1[0].scrollTop = 0;
    $(".index[alt=" + x + "]").attr("src", "img/year_cur.png").siblings().attr("src", "img/year_cur_blank.png");
    
    if ((imgH[x - 1931] * pbW / imgW) > pbH) {
        ps2_4.style.display = "block";
        setTimeout(function () {
            ps2_4.style.display = "none";
        }, 2000);
    } else {
        ps2_4.style.display = "none";
    }
    
}

function setJump() {
    "use strict";
    var i,
        p1_2 = $("#p1-2")[0],
        p1_6 = $("#p1-6")[0],
        p2_2 = $("#p2-2")[0],
//        p2_3 = $("#p2-3")[0],
//        p2_5 = $("#p2-5")[0],
        p3_2 = $("#p3-2")[0],
//        p4_3 = $("#p4-3")[0],
        p5_3 = $("#p5-3")[0],
//        ps1_7 = $("#ps1-7")[0],
        ps2_3 = $("#ps2-3")[0];
    p1_2.onclick = function () {
        showPage(0, 3);
        showPage(1, 2);
        showPage(2, 1);
    };
    p1_6.onclick = function () {
        showPage(0, 2);
    };
    p2_2.onclick = function () {
        showPage(0, 1);
    };
/*
    p2_3.onclick = function () {
        showPage(0, 4);
    };
    p2_5.onclick = function () {
        showPage(0, 4);
    };
*/
    p3_2.onclick = function () {
        showPage(0, 1);
    };
/*
    p4_3.onclick = function () {
        showPage(0, 1);
    };
*/
    p5_3.onclick = function () {
        showPage(0, 1);
    };
/*
    ps1_7.onclick = function () {
        showPage(1, 2);
        showPage(2, 1);
    };
*/
    ps2_3.onclick = function () {
        showPage(0, 5);
    };
    $(".index").click(function () {
        changePage(this.alt);
        setTimeout(function () {
            $("#pb1").perfectScrollbar("update");
        }, 200);
    });
}
setStyle();
showPage(0, 1);
setJump();
