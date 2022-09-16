<template>
  <el-row>
    <el-col :span="6">
      智慧消防应急管理系统平台
    </el-col>
    <el-col :span="12">
      <el-menu mode="horizontal" router>
        <el-menu-item :index="item.path" v-for="item in navData" :key="item.id">
          {{ item.name }}
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="6">

    </el-col>
  </el-row>

</template>

<script lang="ts" setup>
import { reactive } from "vue";

const navData = reactive([
  { id: 1, name: "综合态势", path: "ComprehensiveSituation" },
  { id: 2, name: "设备管理", path: "device" },
  { id: 3, name: "告警管理", path: "alert" },
  { id: 4, name: "巡检管理", path: "Patrol" },
  { id: 5, name: "隐患管理", path: "hiddeDanger" },
  { id: 6, name: "系统设置", path: "set" },
]);
</script>
<style  scoped>

</style>


