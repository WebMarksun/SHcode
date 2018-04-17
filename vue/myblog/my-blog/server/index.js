const express = require('express');
const static = require("express-static");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const multer = require("multer");
const multerObj = multer({dest:'./static/upload'});
var server = express();
server.listen(8080);
//获取请求数据
// get自带
// post用bodyParser
server.use(bodyParser.urlencoded({
    extended:true,//扩展模式返回的数据格式不同
    //limit:2*1024*1024//大小限制 2M
}));
server.use(multerObj.any());
server.use(cookieParser);
// 设置cookieSession，提高安全性
(()=>{
    let keys = [];
    for(let i=0;i<100000;i++){
        keys[i]='sun_'+i+Math.random();
    }
    server.use(cookieSession({
        name:'sess_id',//每一个session都有一个保存在cookie中的sess_id对应着自己的session文件，
        keys,
        maxAge: 1000 * 60 * 60 * 4 //4h
    }))
}
)()
//route
server.use('/admin',require('./api/admin/login.js')())
server.use('/label',require('./api/web/label.js')())
server.use('/files',require('./api/web/files.js')())
server.use('/admin',require('./api/web/admin.js')())

// server.use(static('./static/'))