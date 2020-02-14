//引入express模块
// import express from 'express';
import express from 'express';

var app =express()

function send(res, ret){
    let str =JSON.stringify(ret)

    res.send(str)
}

var config = null;
export function start(cfg){
    config = cfg;
    //监听7777端口

    app.listen(config.CLIENT_PORT);
    console.log("game server is listening on "+config.CLIENT_PORT);
}

//设置跨域访问 
app.all('*',(req,res,next)=>{

    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    next()

})

app.get('/ddd',(req,res)=>{
    send(res,'卧槽!!21222234阿斯顿发3341322 222')
})


