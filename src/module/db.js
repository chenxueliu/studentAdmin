// mongodb 数据库
const mongoose = require('mongoose')
// 连接mongodb
mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true })

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('连接成功')
})

// 3、创建一个mongoose架构Schema
// 参数为json格式
const Student = new mongoose.Schema({
  name: {
    type: String,
    required: true // 必填项
  },
  password:Number;
  age: Number,
  gender: Boolean,
  classname: String,
})
// 实例化模型
const Stu = mongoose.model('Stu', Student)
const stu = new Stu({
  name: '小鲜肉',
  age: 22,
  password:555555,
  gender: true,
  classname: 'web1810A'
})
