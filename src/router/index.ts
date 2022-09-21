// import operationRouter from './operation'
// @ts-ignore
import path from "path";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import layout from "../layout/index.vue";
import login from "../views/login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/index",
    component: layout,
    redirect: "/ComprehensiveSituation",
    children: [
      {
        path: "/ComprehensiveSituation",
        component: () => import("../views/ComprehensiveSituation/index.vue"),
      },
      {
        path: "/device",
        name: "Device",
        redirect: "/fireSystem",
        component: () => import("../views/device/Device.vue"),
        children: [
          {
            path: "/fireSystem",
            name: "FireSystem",
            component: () => import("../views/device/FireSystem.vue"),
          },
          {
            path: "/waterSystem",
            name: "WaterSystem",
            component: () => import("../views/device/WaterSystem.vue"),
          },
        ],
      },
      {
        path: "/alert",
        redirect: "/details",
        component: () => import("../views/alert/index.vue"),
        children: [
          //文章管理
          {
            path: "/details",
            component: () => import("../views/alert/details.vue"),
          },
          {
            path: "/detailspages",
            component: () => import("../views/alert/detailspages.vue"),
          },
        ],
      },
      {
        path: "/hiddeDanger",
        component: () => import("../views/hiddeDanger/index.vue"),
      },
      {
        path: "/set",
        component: () => import("../views/set/index.vue"),
      },
      {
        path: "/Patrol",
        component: () => import("../views/Patrol/index.vue"),
        redirect: "/plan",
        children:[
          {
            path:'/plan',
            component: () => import("../views/Patrol/plan.vue"),
          },
          {
            path:'/task',
            component: () => import("../views/Patrol/task.vue"),
          }

        ]
      },

    ],
  },
];

// 哈希路由
const router = createRouter({
  // 路由模式
  history: createWebHashHistory(),
  routes: routes,
});
/**
 - 输出对象
 */
export default router;
