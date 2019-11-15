import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index'),
        name: '首页',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/CreateUser',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/CreateUser/index'),
        name: '创建用户',
        meta: { title: '创建用户', icon: 'documentation', affix: true }
      }
    ]
  }
]
export const asyncRoutes = [
  {
    path: '/Class',
    component: Layout,
    redirect: '/Class/ClassList',
    name: '班级',
    meta: {
      title: '班级',
      icon: 'table'
    },
    children: [
      {
        path: '/classlist',
        component: () => import('@/views/Class/ClassList'),
        name: '班级列表',
        meta: { title: '班级列表' }
      },
      {
        path: '/createclass',
        component: () => import('@/views/Class/createClass'),
        name: '创建班级',
        meta: { title: '创建班级' }
      }
    ]
  },
  {
    path: '/StudentOperation',
    component: Layout,
    redirect: '/StudentOperation/AllStudents/index',
    name: 'Students',
    meta: {
      title: '学生操作',
      icon: 'nested'
    },
    children: [
      {
        path: 'AllStudents',
        component: () => import('@/views/StudentOperation/AllStudents/index'), // Parent router-view
        name: '所有学生',
        meta: { title: '所有学生' }
      },
      {
        path: 'AddStudent',
        name: '添加学生',
        component: () => import('@/views/StudentOperation/AddStudent/index'),
        meta: { title: '添加学生' }
      }
    ]
  },
  {
    path: '/Headmaster',
    component: Layout,
    redirect: '/Headmaster/HeadmasterList',
    name: '班主任',
    meta: {
      title: '班主任',
      icon: 'example'
    },
    children: [
      {
        path: '/HeadmasterList',
        component: () => import('@/views/Headmaster/HeadmasterList/index'),
        name: 'HeadmasterList',
        meta: { title: '班主任列表', icon: 'edit' }
      },
      {
        path: '/AddHeadmaster',
        component: () => import('@/views/Headmaster/AddHeadmaster/index'),
        name: 'AddHeadmaster',
        meta: { title: '添加班主任', icon: 'list' }
      }
    ]
  },
  {
    path: '/MarketingDepartment',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/MarketingDepartment/index'),
        name: '市场部',
        meta: { title: '市场部', icon: 'documentation', affix: true }
      }
    ]
  }
]
const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
