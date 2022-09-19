import { createStore } from 'vuex'

export default createStore({
  state:{
    deviceData:{
      menuInfo:[
        {
          menuId:1,
          menuUrl:"/fireSystem",
          menuName:"火灾监测报警系统",
          menuIcon:"Document"
        },
        {
          menuId:2,
          menuUrl:"/waterSystem",
          menuName:"消防水监测系统",
          menuIcon:"Location"
        }
      ]
    }
  },
  // 模块引入
  modules: {

  }
})