<template>
 <div class="hometab">
   <van-tabs v-model="activeName" sticky @click="change">
  <van-tab title="流行" name="pop"></van-tab>
  <van-tab title="新款" name="new"></van-tab>
  <van-tab title="精选" name="sell"></van-tab>
</van-tabs>
 </div>
</template>

<script>
 export default {
  name: 'HomeTab',
  // props: {
  //   activeName:{
  //     type: String,
  //     default() {
  //       return 'top'
  //     }
  //     }
  // },
  data () {
   return {
     activeName:'pop'
   }
  },
  methods: {
    change() {
      let activeName = this.activeName 
      this.$emit('tabClick',activeName)
    }
  }
 }

</script>

<style lang="less" >
.hometab {
  z-index: 8;
}
 
</style>
