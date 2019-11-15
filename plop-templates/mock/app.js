const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
// 引入路由文件
const router = require('./module/router')
app.use(cors())
app.use(bodyParser.json())
app.use(router)
app.listen(8080, () => {
  console.log('http://localhost:8080')
})
