// 服务 逻辑处理模块
const student = require('./db')
const Classroom = require('./classroom')
// 添加学生
exports.addstudentHandle = (req, res) => {
  const datas = req.body
  student.addStu(datas, result => {
    // console.log(result)
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
  // console.log(req.body)
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
    // console.log(result)
    res.json({
      msg: result.msg,
      code: result.code
    })
  })
}
// 编辑学生
exports.editStudentHandle = (req, res) => {
  const iddata = req.body
  // console.log(iddata)
  student.editStudent(iddata, result => {
    res.json({
      data: result
    })
  })
}

// 确定编辑
exports.confirmEditHandle = (req, res) => {
  const iditem = req.body.id
  // console.log(req.body)
  console.log(iditem)
  student.confirmEdit(iditem, req.body, result => {
    console.log(result)
    res.json({
      data: result.msg
    })
  })
}
// 查询学生
exports.searchStudenttHandle = (req, res) => {
  student.searchStudent(req.body.id, result => {
    if (result.length <= 0) {
      res.send('没有符合条件的条数据')
    } else {
      res.json(result)
    }
  })
}
// 删除班级
exports.delClassHandle = (req, res) => {
  const bodydata = req.body.id
  console.log(bodydata)
  Classroom.deleClass(bodydata, result => {
    console.log(result)
    res.json({
      msg: result.msg,
      code: result.code
    })
  })
}
