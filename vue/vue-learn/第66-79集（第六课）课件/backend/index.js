const express = require('express');
const app  = express();
const proxy = require('http-proxy-middleware');//引入代理中间件
const apiProxy = proxy('/api', 
	{ 

		target: 'http://m.kugou.com',
		changeOrigin: true,
		"secure": false,
		"pathRewrite": {
          "^/api": ""
        },
        "Referer": "http://m.kugou.com/",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Mobile Safari/537.36"
        }
	}
);
app.use('/api/*', apiProxy);


app.use(function (req,res,next){

	res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
	
	next();
})

app.get("/",(req,res) => {

	console.log('有人来请求了')

	res.sendFile(__dirname+'/index.html')
})

app.get("/hello",(req,res) => {

	console.log('有人来请求了')

	res.json({
		data:'hello'
	})
})

//http://localhost:4000/data
app.get("/data",(req,res) => {


	
})



app.listen(4000,()=>{
	console.log('服务启动成功');
})