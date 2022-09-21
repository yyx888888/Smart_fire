import request from './index'

export const getalert = (params:any) => {
    return request({
      url: '/query',
      method: 'post',
      data: params,
    })
  }