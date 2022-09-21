
import { createStore } from 'vuex'
import login from './login'

export default createStore({
  // 模块引入
  modules: {
    login
  }
})