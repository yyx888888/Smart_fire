<!-- 页面布局 -->
<template >
  <div class="common-layout">
    <el-container>
      <el-header>
        <MyHeader></MyHeader>
        <el-row class="row">
          <el-col :span="3" class="leftCol">
            <span style="font-size: 14px; font-weight: 600;color: white;">项目</span>
            <el-select v-model="select" size="small" class="select">
              <el-option label="ABC综合体项目" value="ABC综合体项目" selected="selected" />
              <el-option label="SUP产业园项目" value="SUP产业园项目" />
            </el-select>
          </el-col>
          <el-col :span="21" class="rightCol">
            <span>
              <!-- <el-breadcrumb separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/' }">综合态势</el-breadcrumb-item>
                <el-breadcrumb-item>promotion management</el-breadcrumb-item>
              </el-breadcrumb> -->
            </span>
            <span>
              <!-- <span class="weather">当前气温：{{weather.tem}}° {{weather.wea}}</span> -->
              <span class="weather">当前气温:22° 多云</span>
              <span class="time">{{ dataTime }} </span>

              <!-- <button @click="login">点击登录测试</button> -->
            </span>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onBeforeMount, ref, reactive } from "vue";
import MyHeader from "../components/MyHeader.vue";
import axios from 'axios'

// import { loginApi } from '../api/login'
let parms = {
  username: 'admin',
  pwd: '123'

}
const params = new URLSearchParams()
params.append('username', parms.username)
params.append('pwd', parms.pwd)



// function login() {
//   axios({
//     method: 'post',
//     url: 'http://127.0.0.1:8001/login',
//     data: params,
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
//   }).then((res) => {
//     console.log(res);
//   })
// }

let weather = reactive({
  tem: '', //实时气温
  wea: '', //天气状况
})


// 获取天气的函函数
const getWeather = async () => {
  let { data: res } = await axios.get('https://v0.yiketianqi.com/api?appid=42145638&appsecret=5JfFdyad&version=v61')
  weather.tem = res.tem;
  weather.wea = res.wea;
}



//现在的时间
let dataTime = ref("");
//今天星期
const day = ref("");
let datelist = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六',]
let timer: any;
const select: any = ref('ABC综合体项目')
//获取当前的时间
const getNowTime = () => {
  //时间戳
  const Dates = new Date();
  //年份
  const Year = Dates.getFullYear();
  //星期
  const data: number = Dates.getDay();
  //月份下标是0-11
  const Months = Dates.getMonth() + 1 < 10 ? "0" + (Dates.getMonth() + 1) : Dates.getMonth() + 1;
  //具体的天数
  const Day = Dates.getDate() < 10 ? "0" + Dates.getDate() : Dates.getDate();
  //小时
  const Hours = Dates.getHours() < 10 ? "0" + Dates.getHours() : Dates.getHours();
  //分钟
  const Minutes = Dates.getMinutes() < 10 ? "0" + Dates.getMinutes() : Dates.getMinutes();
  //秒
  const Seconds = Dates.getSeconds() < 10 ? "0" + Dates.getSeconds() : Dates.getSeconds();
  dataTime.value = `${Year}年${Months}月${Day}日 ${datelist[data]}  ${Hours}:${Minutes}:${Seconds} `;
  day.value = `${data}`;
}



//挂载定时器
onMounted(() => {
  timer = setInterval(() => {
    getNowTime();
  });

});

onBeforeMount(() => {
  // 清理定时器要处理 timer 的类型
  clearInterval(Number(timer));
});




</script>

<style scoped lang="less" >
.el-header {
  height: 90px;


}

.row {
  background-color: rgb(54, 57, 62);
  align-items: center;
  color: #fff;
  height: 40px;
  padding: 0 10px 0 10px !important;

  .leftCol {


    :deep(.el-select .el-input__wrapper) {
      background-color: rgba(0, 0, 0, 0);
      margin-left: 5%;
    }

    :deep(.el-select .el-input__inner) {
      color: #fff;
    }

    .select {
      width: 70%
    }
  }

  .rightCol {
    display: flex;
    justify-content: space-between;

    .time {
      text-align: right;
      font-size: 12px;
    }

    .weather {
      margin-right: 20px;
      color: rgb(18, 200, 200);
      font-size: 10px;
    }

    span {
      font-size: 14px;

    }

  }
}

// /* 不被选中时的颜色  面包屑导航*/
// .el-breadcrumb :deep .el-breadcrumb__inner {
//   color: #d9bb95 !important;
//   font-weight: 400 !important;
// }

// /* 被选中时的颜色 */
// .el-breadcrumb__item:last-child :deep .el-breadcrumb__inner {
//   color: #fc9105 !important;
//   font-weight: 800 !important;
// }
</style>

