<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <tab-bar class="tabbar"></tab-bar>
  </div>
</template>
<script>
import TabBar from 'components/TabBar/TabBar.vue'
export default {
  name:"app",
  components: {
    TabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";

</style>
