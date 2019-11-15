// 前端接口请求
import axios from 'axios'
const url = 'http://localhost:8080'
// 添加学生
export const addStudent = stuitem => {
  console.log(stuitem)
  return axios.post(url + '/addstudent', { ...stuitem })
}
// 获取学生
export const findStudent = () => {
  return axios.post(url + '/findstudent')
}
// 添加班级
export const addClassRoom = classitem => {
  return axios.post(url + '/addclass', { ...classitem })
}
// 获取所有班级列表
export const findClassroom = () => {
  return axios.post(url + '/findclassroom')
}
// 删除学生
export const deleteStudent = _id => {
  return axios.post(url + '/delstudent', { _id })
}
// 编辑学生
export const editStudent = id => {
  return axios.post(url + '/editstudent', { id })
}
// 确定编辑
export const confirmEdit = (id, data) => {
  return axios.post(url + '/confirmedit', { id, ...data })
}
// 查询学生
export const saerchStudent = id => {
  return axios.post(url + '/searchstudent', { id })
}
// 删除班级
export const delClass = id => {
  return axios.post(url + '/delclass', { id })
}
