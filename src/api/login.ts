import http from '../api/index';
import {stringify} from 'qs'


//登录接口
export async function loginApi(data:any) {
  try {
    console.log('成功');
    console.log(JSON.stringify(data));
  

      return await http.post('/login',JSON.stringify(data) );
  } catch (e) {
    console.log('失败');
    
      throw e;
  }
}