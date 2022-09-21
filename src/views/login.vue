<template >
  <div class="bigBox">
    <div class="box">
      <h2 class="title">Welcom</h2>
      <el-form :model="formInline" ref="formRef">
        <div class="lis-form-box">
          <el-form-item prop="j_username" :rules="[{ required: true, message: '请输入账号' }]">
            <el-input v-model="formInline.j_username" placeholder="账号" />
          </el-form-item>
        </div>
        <div class="lis-form-box">
          <el-form-item prop="j_password" :rules="[{ required: true, message: '请输入密码' }]">
            <el-input v-model="formInline.j_password" type="password" placeholder="密码" show-password />
          </el-form-item>
        </div>
        <div class="lis-form-box buttonBox">
          <!-- 点击登录把表单实例对象传过去 -->
          <el-button type="primary" @click="submitForm(formRef)" @keyup.enter="submitForm(formRef)">
            登录
          </el-button>
          <el-button type="primary" @click="reset(formRef)">
            重置
          </el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { FormInstance } from "element-plus";
import { TypeLoginParam } from "../type/userApi";

import { reactive, ref, } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore, } from "vuex";

const router = useRouter()
const store = useStore()


// 表单dom
const formRef = ref<FormInstance>();

// 表单绑定的对象
const formInline = reactive<TypeLoginParam>({
  j_username: "",
  j_password: "",
});



// 提交的方法
const submitForm = (formEl: FormInstance | undefined) => {
  // 如果没有表单 就return
  if (!formEl) return;
  // 表单验证
  formEl.validate(async (valid) => {
    // 验证通过
    if (valid) {
      try {
        // // 发送后台的参数
        // const params = new URLSearchParams()
        // params.append('username', formInline.j_username)
        // params.append('pwd', formInline.j_password)
        const params = {
          username: formInline.j_username,
          pwd: formInline.j_password,
        }
        // 验证登录
        store.dispatch('login/checkLogin', params).then(res => {
          if (res === true) {
            router.push('/index')
            // @ts-ignore
            ElNotification({
              message: '登录成功',
              type: 'success',
              title: "欢迎",
              duration: 3000,
            })
          } else {
            // @ts-ignore
            ElNotification({
              message: '账号或密码错误',
              type: 'error',
              title: "登录失败",
              duration: 3000,
            })
          }
        });
        // axios({
        //   method: 'post',
        //   url: 'http://127.0.0.1:8001/login',
        //   data: params,
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   }
        // }).then((res) => {
        //   console.log('后台返回的结果', res);
        //   if (res.data === '登录成功') {
        //     router.push('/index')
        //     // @ts-ignore
        //     ElNotification({
        //       message: '登录成功',
        //       type: 'success',
        //       title: "欢迎",
        //       duration: 3000,
        //     })
        //   } else {
        //     // @ts-ignore
        //     ElNotification({
        //       message: '账号或密码错误',
        //       type: 'error',
        //       title: "登录失败",
        //       duration: 3000,
        //     })
        //   }
        // })
      } catch (e) {
        console.log(e)
      }
    }
  });
};

//重置  接受表单对象或者空
const reset = (formEl: FormInstance | undefined) => {
  // @ts-ignore
  formEl.resetFields()
}
</script>
<style scoped lang="scss">
.box {
  height: 40%;
  width: 20%;
  padding: 3%;
  margin: 0 auto;
  margin-top: 10%;
}

.lis-form-box {
  margin-top: 40px;
}

.lis-login-right {
  .el-button {
    width: 100%;
    --el-button-size: 53px;
  }
}

.title {
  text-align: center;
  color: white;
}

.buttonBox {
  display: flex;
  justify-content: space-between;
}

::v-deep html,
body,
#app {
  background-color: red !important;
}

.bigBox {
  height: 100%;
  width: 100%;
  background-image: url(@/assets/bg.jpg);
  background-size: cover;
  border: 0.01px solid #000;

}
</style>