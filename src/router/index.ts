
// import operationRouter from './operation'

import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '../layout/index.vue'


const routes = [
  {
    path: '/',
    component:layout
    // component: ()=>import('./test.vue')
  },
  {
    path:'/ComprehensiveSituation',
      component: ()=>import('../views/ComprehensiveSituation/index.vue')
  }



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