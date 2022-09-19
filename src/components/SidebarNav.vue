<template>
  <el-menu
      background-color="#545c64"
      class="el-menu-vertical-demo"
      :default-active="activeIndex"
      text-color="#fff"
      active-text-color="#fff"
      @select="changeContent"
  >
    <div v-for="item in menuInfo">
      <el-menu-item :index="item.menuUrl"  :key="item.menuId">
        <el-icon><component :is="item.menuIcon"/></el-icon>
        <span>{{ item.menuName }}</span>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script lang="ts">
import {defineComponent, onMounted,ref} from 'vue';
import {Document, Location} from '@element-plus/icons-vue'
import {useRouter} from "vue-router";
import {useStore} from "vuex";

export default defineComponent({
  name: "SidebarNav",
  setup(){
    const store=useStore();
    const router=useRouter();
    const activeIndex=ref("");
    const changeContent=(index:string)=>{
      activeIndex.value=index
      router.push(index)
    }
    onMounted(()=>{
      changeContent('/device')
    })
    return {
      changeContent,
      activeIndex,
      menuInfo:store.state.deviceData.menuInfo
    }
  }
})
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  height: 100vh;
}
.el-menu-item.is-active {
  background-color: #3a5574 !important;
}
</style>