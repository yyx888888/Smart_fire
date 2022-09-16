<!-- 页面布局 -->
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <MyHeader></MyHeader>
        <!-- <router-link to="/ComprehensiveSituation">to</router-link> -->
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script setup>
import MyHeader from "../components/MyHeader.vue";



</script>

<style scoped >
* {
  margin: 0 !important;
  padding: 0 !important;
}
</style>

