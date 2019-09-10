# Express-study

```javascript
// 1. 安装

//2. 引包

const express = require('express')

//3. 创建服务器应用程序

const app = express()

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

