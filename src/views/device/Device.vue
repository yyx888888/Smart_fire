<template>
  <div class="home">
    <div class="leftMenu">
      <sideBar></sideBar>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import sideBar from '@/components/SidebarNav.vue';

export default defineComponent({
  name: 'device',
  components: {
    sideBar,
  },
});
</script>

<style scoped>
h1 {
  text-align: center;
}

.leftMenu {
  width: 15%;
  float: left;
  text-align: center;
}

.content {
  width: 85%;
  float: left;
}
</style>