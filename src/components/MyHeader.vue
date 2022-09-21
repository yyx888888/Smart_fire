<template>
  <el-row class="nav">
    <el-col :span="6" class="logo">
      <span style="border: 1px solid #fff; font-weight: bold; padding: 3px;">LOGO</span>
      <span class="title">
        <span class="color">智慧消防应急</span>
        <span>管理系统平台</span>
      </span>

    </el-col>
    <el-col :span="12" class="menu">
      <el-menu mode="horizontal" text-color="#fff" :ellipsis="false" :default-active="activMenu" router
        @select="selected">
        <el-menu-item :index="item.path" v-for="item in navData" :key="item.id">
          {{ item.name }}
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="6" style="text-align: right;">
      <el-button type="warning">退出登录</el-button>
    </el-col>
  </el-row>


</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

// 默认激活的菜单 从本地存储中取出 activMenu  没有没有值 默认激活的就是 综合态势页面
let activMenu = ref(sessionStorage.getItem('activMenu') || 'ComprehensiveSituation')

// 导航数据
const navData = reactive([
  { id: 1, name: "综合态势", path: "ComprehensiveSituation" },
  { id: 2, name: "设备管理", path: "device" },
  { id: 3, name: "告警管理", path: "alert" },
  { id: 4, name: "巡检管理", path: "patrol" },
  { id: 5, name: "隐患管理", path: "hiddeDanger" },
  { id: 6, name: "系统设置", path: "set" },
]);

// 菜单激活的函数  获取到激活的菜单项
const selected = (index: any) => {
  // 保存菜单到本次存储
  sessionStorage.setItem('activMenu', index)
}
</script>
<style  lang="less" scoped>
.nav {
  // border: 1px solid #000;
  border-bottom: none;
  background-color: rgba(40, 44, 52, 1);
  color: white;
  height: 50px;
  align-items: center;
  padding: 0 10px 0 10px;

  .logo {
    white-space: nowrap;

    .title {
      font-size: 18px;
      font-weight: 700;
      margin-left: 3%;

      .color {
        color: #F59A23;
      }
    }
  }

  .el-menu {
    background-color: rgba(0, 0, 0, 0);
    height: 36px;
    border: none;
    font-size: 12px !important;

    // 菜单激活的样式
    .el-menu-item.is-active {
      background-color: rgba(0, 0, 0, 0);
      color: rgb(51, 213, 233) !important;
      inline-size: 1px solid rgb(51, 213, 233);
      font-weight: bold;
    }

    // 鼠标移入菜单的样式
    .el-menu-item:hover {
      background-color: rgba(208, 190, 190, 0.3);
    }
  }
}

.titile {
  background-color: red !important;
}

.menu {
  display: flex;
  justify-content: center;
}
</style>


