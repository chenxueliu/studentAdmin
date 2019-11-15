// 路由
// 引入路由
const express = require('express')
const service = require('./service')
const router = express.Router()
router.post('/addstudent', service.addstudentHandle)
router.post('/findstudent', service.findstudentHandle)
router.post('/addclass', service.addclassHande)
router.post('/findclassroom', service.findclassHandle)
router.post('/delstudent', service.delStudentHandel)
router.post('/editstudent', service.editStudentHandle)
router.post('/confirmedit', service.confirmEditHandle)
router.post('/searchstudent',service.searchStudenttHandle)
// 删除班级
router.post('/delclass',service.delClassHandle)

module.exports = router
