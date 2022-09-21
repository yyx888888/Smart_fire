import axios from 'axios'
// elemt 
import {ElNotification} from 'element-plus'
// 加载动画的插件
import NProgress from 'nprogress'

const http = axios.create({
    baseURL: 'http://127.0.0.1:8001',
    timeout: 5000,
    // 请求头
    headers: {
        'Content-Type': 'application/json'
    }
})

// // 请求拦截器
// http.interceptors.request.use(
//     config => {
//       // 启动加载插件
//         NProgress.start();
//         return config
//     },
//     // 错误信息
//     function (error) {
//         return Promise.reject(error);
//     }
// )

// // 响应拦截器
// http.interceptors.response.use(
//     response => {
//       // 关闭加载插件
//         NProgress.done()
//         const res = response.data
//         // 提示消息
//         if (res.resultCode !== 1) {
//             ElNotification({
//                 message: res.message || 'Error',
//                 type: 'error',
//                 duration: 5 * 1000
//             })
//             // 返回错误信息
//             return Promise.reject(new Error(res.message || 'Error'))
//         } else {
//           // 成功
//             return res
//         }
//     },
//     error => {
//         NProgress.done()
//         ElNotification({
//             message: error.message,
//             type: 'error',
//             duration: 5 * 1000
//         })
//         return Promise.reject(error)
//     }
// )

export default http