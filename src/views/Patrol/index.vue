<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="plan" class="el-menu-vertical-demo menu" router>
          <router-link to="/plan">
            <el-menu-item class="selected">
              <img src="../../../public/images/u4910.svg" alt="">
              <span class="white">巡检计划</span>
            </el-menu-item>
          </router-link>
          <router-link to="/task">
            <el-menu-item>
              <img src="../../../public/images/u4914.svg" alt="">
              <span class="white">巡检任务</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.menu {

  height: 100%;
  background-color: rgba(40, 44, 52, 1);
}

.white {
  color: white;
  margin-left: 10px;
}
</style>