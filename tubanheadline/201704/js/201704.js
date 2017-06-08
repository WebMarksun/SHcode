 function loadQue(obj, c) {
            var a = (obj.array === undefined) ? [] : obj.array,
                u = (obj.path === undefined) ? "" : obj.path,
                n1 = 0,
                n2 = 0;
            if (a.length === 0) {
                c();
                return false
            }
            var net = function (s) {
                if (s !== "bad") {
                    n1++
                } else {
                    n2++
                }
                if (n1 + n2 === a.length) {
                    if (n1 === a.length) {
                        console.log("all OK!");
                        c()
                    } else {
                        console.log("not all loaded")
                    }
                }
            };
            for (var i in a) {
                if (/.jpg|.png|.gif/.test(a[i])) {
                    loadImage(u + a[i], net)
                } else {
                    loadClip(u + a[i], net)
                }
            }
        }

        function loadClip(url, callback) {
            var o = null,
                stateChange = function () {
                    if (o.readyState === 4) {
                        if (o.status === 200) {
                            callback("ok", url)
                        } else {
                            callback("bad", url)
                        }
                    }
                };
            if (window.XMLHttpRequest) {
                o = new XMLHttpRequest()
            } else {
                if (window.ActiveXObject) {
                    o = new window.ActiveXObject("Microsoft.XMLHTTP")
                }
            }
            if (o !== null) {
                o.onreadystatechange = stateChange;
                o.open("GET", url, true);
                o.send()
            } else {
                console.log("XMLHTTP is not supported")
            }
        }

        function loadImage(url, callback) {
            var o = new Image();
            o.src = url;
            if (o.complete) {
                callback("ok", url)
            } else {
                o.onload = function () {
                    callback("ok", url)
                };
                o.onerror = function () {
                    callback("bad", url)
                }
            }
        }

        function $ft(id) {
            return document.getElementById(id)
        }
        var Ctrl = {
                assets: {
                    array: ["head.png", "pic1.png", "pic2.png", "pic3.png", "pic4.png","pic5.png","pic6.png","pic7.png", "manga.jpg"],
                    path: "images/"
                }
            },
            v1, v2, c, cover;
        v1 = $ft("vd1");
        c = $ft("ac3");
        cover = $ft("cover");
        c.addEventListener("mouseup", function () {
            cover.className = cover.className.replace("", "active")
        });
        cover.addEventListener("mouseup", function () {
            cover.className = cover.className.replace("active", "")
        });

        function addAnimate(g) {
            var t = parseInt(g.getAttribute("data-order")),
                d = parseInt(g.getAttribute("data-delay"));
            setTimeout(function () {
                g.style.display = "block"
            }, d + t * 350)
        }

        function genAnimate(arr) {
            var l = arr.length,
                i = 0;
            for (i; i < l; i++) {
                if (arr[i].style !== undefined) {
                    addAnimate(arr[i])
                }
            }
            // addAnimate($ft("vd1"));
        }
        loadQue(Ctrl.assets, function () {
            console.log("Queue accomplished");
            $ft("loading").style.height = 0;
            genAnimate(document.getElementsByTagName("img"))
        });