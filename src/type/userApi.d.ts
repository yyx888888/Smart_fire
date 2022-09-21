export interface TypeLoginParam {
  //登录账号
  j_username: string;
  //登录密码
  j_password: string;
}

export interface TypeResult<T> {
  result: T
  resultCode: number

}

export interface TypeLoginResultData {
  deptId: string
  deptName: string
  email: string
  mobile: string
  name: string
  refresh_token: string
  roleCode: string
  roleName: string
  sex: string
  user_token: string
  userid: number
  username: string
}

export interface TypeScreenResult {
  auths: any
  children: TypeScreenResult[]
  component: string
  hidden: boolean
  id: number
  meta: { icon: string, title: string, openType: string }
  name: string
  path: string
  redirect: string
  sortNum: number
  parentId?: number
}