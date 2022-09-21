import { toRaw, reactive } from '@vue/reactivity'

export default {
  namespaced: true,
  state: {
   account : [
    {
      username :'admin',
      pwd:'123'
    }
   ]
  },
  mutations: {

  },
  actions: {
// 验证登录
    checkLogin(ctx: Object, val: Object) {
        // @ts-ignore
      let a =  JSON.parse(JSON.stringify( ctx.state.account[0])) ;
       //取对象a和b的属性名
       let aProps = Object.getOwnPropertyNames(a);
       let bProps = Object.getOwnPropertyNames(val);
      //  判断属性名的length是否一致
       if (aProps.length != bProps.length) {
           return false;
       }
         //循环取出属性名，再判断属性值是否一致
      for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
          // @ts-ignore
        if (a[propName] !== val[propName]) {
            return false;
        }
      }
      return true;
    },

  },
  getters: {

  }
}
