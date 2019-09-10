# Express-study

ps：重难点可以直接在官方文档中查看

官网：http://www.expressjs.com.cn/
模板引擎：art-templete
详情见官网

```javascript
// 1. 安装

//2. 引包

const express = require('express')

//3. 创建服务器应用程序

const app = express()

//通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了
app.use(express.static('public'))
//如访问public/js/main.js
//http://localhost:3000/js/main.js
//当服务器收到get/请求的时候，执行回调处理函数

app.get('/', (req, res) => res.send('Hello World!'))
/*或者这样写
app.get('/', function(req, res) {
    res.send('Hello World!')
})
*/

//相当于server.listen

app.listen(3000, () => console.log('Example app listening on port 3000!'))
```

