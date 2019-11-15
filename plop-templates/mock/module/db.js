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
  sex: String,
  year: String,
  major: String,
  classname: String,
  market: String,
  pass: String,
  nopass: String,
  age: Number,
  classtype: String,
  master: String
})
// 实例化模型
const Stu = mongoose.model('student', Student)
// 添加学生
exports.addStu = (item, callback) => {
  Stu.insertMany([item]).then(docs => {
    console.log(docs)
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
// 查找所有学生
exports.findstudent = callback => {
  Stu.find().then(docs => {
    console.log(docs)
    if (docs.length == 0) {
      result = {
        code: -1,
        msg: '没有找到学生数据'
      }
    } else {
      const data = []
      for (let i = 0; i < docs.length; i++) {
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
// 删除学生
exports.deleStudent = (id, callback) => {
  // console.log(id)
  Stu.deleteOne({ _id: id._id }).then(docs => {
    console.log(docs)
    if (docs.n == 1) {
      result = {
        code: 0,
        msg: '删除成功'
      }
    } else {
      result = {
        code: -1,
        msg: '删除失败'
      }
    }
    callback(result)
  })
}
// 编辑学生
exports.editStudent = (id, callback) => {
  Stu.find({ _id: id.id }).then(docs => {
    console.log(docs)
  })
}
