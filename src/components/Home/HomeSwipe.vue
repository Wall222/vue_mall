<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in banner" :key="index" >
      <a :href="item.link"><img class="bannerimg" :src="item.image" alt=""/></a
    ></van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: 'HomeSwipe',
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.bannerimg {
  width: 100%;
  margin-top: 36px;
}

</style>
