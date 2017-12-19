const express = require("express");
const static = require("express-static");
const mysql = require("mysql");
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const consolidate = require("consolidate");
const expressRoute = require("express-route");
const multer = require('multer');
const multerObj = multer({ dest: './static/upload' });


var server = express();
server.listen(8888);
//1.获取到前台请求数据
//get自带
server.use(bodyParser.urlencoded());
server.use(multerObj.any());

//2.cookie session
//为了不污染全局变量
(function () {
    var keys = [];
    for (var i = 0; i < 100000; i++) {
        keys[i] = 'a_' + Math.random;
    }
    server.use(cookieParser());
    server.use(cookieSession({
        name: 'sess_id',
        keys: keys,
        maxAge: 20 * 60 * 1000//20min
    }));
})()
//3.模板
server.engine('html',consolidate.ejs)
server.set('views','template');
server.set('view engine','html')
//4.route
server.use('/',require('./route/web/index.js')())
server.use('/admin',require('./route/admin/index.js')())


//5.default :static
server.use(static('./static/'))