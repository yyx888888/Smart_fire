<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="260px" class="aside">
        <div class="aside-head">
          <h3>项目部门列表</h3>
        </div>
        <div class="aside-search">
          <el-input
            v-model="input2"
            class="w-50 m-2"
            placeholder="输入部门关键字"
            :suffix-icon="Search"
          />
        </div>
        <div class="aside-select">
          <el-select v-model="value" class="m-2" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </el-aside>
      <el-main width="600px">
<!-- 页面右侧视图 -->
<router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { Search} from "@element-plus/icons-vue";

import { ref } from "vue";
const input2 = ref("");
const value = ref("");


// 选择器
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
</script>

<style scoped>
.common-layout {
  position: relative;
  height: 1000px;
}
.el-container {
  position: relative;
  height: 100%;
}
.aside {
  position: relative;
  top: 16px;
  background-color: white;
  overflow-x: hidden;
}
.aside-head {
  position: relative;
  height: 36px;
  background-color: #ebeef5;
}
.aside-head h3 {
  position: relative;
  left: 10px;
  padding: 8px;
}

.aside-search {
  padding: 20px;
}
.aside-select {
  padding: 20px;
}
.el-main {
  background-color: white;
  margin: 16px;
  overflow-x: hidden;
}

</style>
