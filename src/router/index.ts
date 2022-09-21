
// import operationRouter from './operation'

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import layout from '../layout/index.vue'
import login from '../views/login.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component:login,
  },
  {
    path: '/index',
    component:layout,
    redirect: '/ComprehensiveSituation',
    children:[
      {
        path: '/ComprehensiveSituation',
        component: () => import('../views/ComprehensiveSituation/index.vue')
      },
      {
        path: '/device',
        component: () => import('../views/device/index.vue')
      },
      {
        path: '/alert',
        component: () => import('../views/alert/index.vue')
      },
      {
        path: '/Patrol',
        component: () => import('../views/Patrol/index.vue')
      },
      {
        path: '/hiddeDanger',
        component: () => import('../views/hiddeDanger/index.vue')
      },
      {
        path: '/set',
        component: () => import('../views/set/index.vue')
      },
    ]
  },
   

]

// 哈希路由
const router = createRouter({
  // 路由模式
  history: createWebHashHistory(),
  routes: routes,
})
/**
 - 输出对象
 */
export default router;