<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar></tab-bar>
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
