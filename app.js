// 1. 安装

//2. 引包

const express = require('express')

//3. 创建服务器应用程序

const app = express()

//公开指定目录
app.use(express.static('public'))

//当服务器收到get/请求的时候，执行回调处理函数

app.get('/', function(req, res) {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
       <h1> hello express!
    </body>
    </html>
    `)
})


//相当于server.listen

app.listen(3000, () => console.log('Example app listening on port 3000!'))