// 服务 逻辑处理模块
const student = require('./db')
const Classroom = require('./classroom')
// 添加学生
exports.addstudentHandle = (req, res) => {
  const datas = req.body
  student.addStu(datas, result => {
    console.log(result)
    if (result.code == 0) {
      res.json({
        msg: result.msg
      })
    }
  })
}

// 查找所有学生
exports.findstudentHandle = (req, res) => {
  student.findstudent(result => {
    const { code, data, msg } = result
    if (code == 0) {
      res.json({
        data,
        msg
      })
    }
  })
}
// 添加班级
exports.addclassHande = (req, res) => {
  console.log(req.body)
  const classdata = req.body
  Classroom.addClass(classdata, result => {
    if ((result.code = 0)) {
      res.json({
        msg: result.msg
      })
    }
  })
}
// 找到所有班级列表
exports.findclassHandle = (req, res) => {
  Classroom.findClassroom(result => {
    const { code, data, msg } = result
    if (code == 0) {
      res.json({
        data,
        msg
      })
    }
  })
}
// 删除单个学生
exports.delStudentHandel = (req, res) => {
  const bodydata = req.body 
  student.deleStudent(bodydata, result => {
    console.log(result)
    res.json({
      msg: result.msg,
      code: result.code
    })
  })
}
// 编辑学生
exports.editStudentHandle=(req,res)=>{
  const iddata=req.body;
}
