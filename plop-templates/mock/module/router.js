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
router.post('/editStudent',service.editStudentHandle)
module.exports = router
