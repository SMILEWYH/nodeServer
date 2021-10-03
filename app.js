var express = require('express');   
var app = express();

// 开放静态资源
app.use(express.static('public'))

//设置全局的全域问题，我这里是把所有的全部允许了，如果不怕麻烦或者业务需求，你也可以在请求里面写对应的跨域问题
app.all('*', function (req, res, next) {   
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.get('/login', function (req, res) {
    let login  = '{"name":"LeonWu","age":"18"}'
    res.send({code: 20000, data: { token: 'admin-token'}})
});
app.get('/admininfo', function(req, res) {
    res.send({ code: 20000, data: { roles: ["admin"], avatar: "https://i.ibb.co/qFDVRCx/b50a7e273e4cf733dbd275f36f16aa7e.jpg", name: "Super Admin"}})
})



app.listen(80,function() {
    console.log('服务器启动成功,正在监听80端口ing')
})