import http from '../api/index';
import {stringify} from 'qs'


//登录接口
export async function loginApi(data:any) {
  try {
    // 拿到结果直接返回
      return await http.post('/login',stringify(data) );
  } catch (e) {
      throw e;
  }
}