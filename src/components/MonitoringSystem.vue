<template>
  <div class="deviceStatus">
<!--    系统数据刷新时间-->
    <div class="leftBox">
      <div class="leftCont">
        <div class="refreshTitle">
          <span class="fire">火灾监测报警系统</span>
          <el-button type="primary" plain class="refreshButton" @click="refreshDate">
            <el-icon><Refresh /></el-icon>
            <span>刷  新</span>
          </el-button>
        </div>
        <div class="refreshDate" >数据更新时间：{{refreshTime}}</div>
      </div>
    </div>
<!--    所有设备状态-->
    <div class="rightBox" v-for="(item,index) in fireDeviceStatus" :key="item.id">
      <div class="rightCont">
        <img :src="item.deviceImgUrl" alt="" :style="{backgroundColor:item.backgroundColor}">
        <div class="statusBox">
          <div class="statusName">{{item.deviceName}}</div>
          <div class="statusNum">{{item.deviceNum}}</div>
        </div>
      </div>
    </div>
<!--    <div class="rightBox" v-for="(item,index) in waterDeviceStatus" :key="item.id">-->
<!--      <div class="rightCont">-->
<!--        <img :src="item.deviceImgUrl" alt="" :style="{backgroundColor:item.backgroundColor}">-->
<!--        <div class="statusBox">-->
<!--          <div class="statusName">{{item.deviceName}}</div>-->
<!--          <div class="statusNum">{{item.deviceNum}}</div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {useStore} from "vuex";

export default defineComponent({
  name: "MonitoringSystem",
  setup(){

    const store=useStore();
    const refreshTime = ref("");
    //获取当前的时间
    const getNowTime = () => {
      const Dates = new Date();
      const Year = Dates.getFullYear();
      const Months = Dates.getMonth() + 1 < 10 ? "0" + (Dates.getMonth() + 1) : Dates.getMonth() + 1;
      const Day = Dates.getDate() < 10 ? "0" + Dates.getDate() : Dates.getDate();
      const Hours = Dates.getHours() < 10 ? "0" + Dates.getHours() : Dates.getHours();
      const Minutes = Dates.getMinutes() < 10 ? "0" + Dates.getMinutes() : Dates.getMinutes();
      const Seconds = Dates.getSeconds() < 10 ? "0" + Dates.getSeconds() : Dates.getSeconds();
      refreshTime.value = `${Year}/${Months}/${Day}/ ${Hours}:${Minutes}:${Seconds} `;
    }
    getNowTime()
    const refreshDate=()=>{
      getNowTime()
    }
    const fireDeviceStatus=store.state.deviceData.fireDeviceStatus
    return{
      refreshDate,
      refreshTime,
      fireDeviceStatus,
      waterDeviceStatus:store.state.deviceData.waterDeviceStatus
    }
  }
})
</script>

<style scoped>
.deviceStatus{
  width: 100%;
  margin:1rem auto;
  display: flex;
  justify-content: space-between;
}
.leftBox{
  width: 22%;
  background-color: #fffef7;
  margin-right: 1rem;
}
.leftCont{
  padding: 1rem;
}
.refreshButton{
  margin-left: 7rem;
}
.fire{
  font-size: 16px;
  font-weight: 800;
}
.refreshDate{
  font-size: 12px;
}
.rightBox{
  width: 12%;
  background-color: #fff;
}
img {
  width: 40px;
  height: 40px;
  border-radius: 5px;
}
.rightCont{
  display: flex;
  justify-content: space-evenly;
  padding-top: 1.2rem;
}
.statusNum{
  font-weight: 1000;
}
</style>