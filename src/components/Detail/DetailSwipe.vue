<template>
  <div>
    <van-swipe class="detail_swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
 export default {
  name: 'DetailSwipe',
  props: {
    topImages: {
    type:Array
  }
  },
  data () {
   return {

   }
  },
 }
</script>

<style lang="less" scoped>
.detail_swipe {
  height: 400px;
  overflow: hidden;
}
img {
  width: 100%;
}
 
</style>
