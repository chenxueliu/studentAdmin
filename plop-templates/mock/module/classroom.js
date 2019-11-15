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
const Class = new mongoose.Schema({
  classname: {
    type: String,
    required: true // 必填项
  },
  createtime: String,
  teacher: String,
  classmaster: String
})
// 实例化模型
const Clas = mongoose.model('classroom', Class)
// 添加班级
exports.addClass = (dataitem, callback) => {
  Clas.insertMany([dataitem]).then(docs => {
    if (docs.length == 0) {
      result = {
        code: -1,
        msg: '添加失败'
      }
    } else {
      result = {
        code: 0,
        msg: '添加成功'
      }
    }
    callback(result)
  })
}
// 查找班级
exports.findClassroom = callback => {
  Clas.find().then(docs => {
    console.log(docs)
    if (docs.length == 0) {
      result = {
        code: -1,
        msg: '没有找到班级数据'
      }
    } else {
      const data = []
      for (let i = 0; i < docs.length; i++) {
        docs[i]._doc.createtime = new Date(docs[i]._doc.createtime)
          .toLocaleString()
          .split(' ')[0]
        data.push(docs[i]._doc)
      }
      result = {
        code: 0,
        msg: '找到啦',
        data
      }
    }
    callback(result)
  })
}
