import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
/* 引入全局css */
import './assets/main.css'


const app = createApp(App)

// 使用路由
app.use(router)  

// 中文版本的elementPlus
app.use(ElementPlus, {    
  locale: zhCn,
}) 

// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
