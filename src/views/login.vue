<!-- <template >
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
        <el-button type="primary" @click="submitForm(formRef)" @keyup.enter="submitForm(formRef)">
          登录
        </el-button>
        <el-button type="primary" @click="submitForm(formRef)" @keyup.enter="submitForm(formRef)">
          重置
        </el-button>
      </div>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import type { FormInstance } from "element-plus";
import { TypeLoginParam } from "../type/userApi";

import { reactive, ref } from "vue";


const formRef = ref<FormInstance>();

const formInline = reactive<TypeLoginParam>({
  j_username: "admin",
  j_password: "123456",
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      try {
        // @ts-ignore
        ElNotification({
          message: '登录成功',
          type: 'success',
          title: "欢迎",
          duration: 1000,
        })

      } catch (e) {
        console.log(e)
      }
    }
  });
};
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

html {
  background-color: red;
}
</style> -->