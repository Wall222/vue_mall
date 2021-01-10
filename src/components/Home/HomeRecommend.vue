<template>
  <div>
<van-grid class="Homerecommendgird" :border="false" :column-num="4" direction="horizontal">
  <van-grid-item class="Homerecommendgirditem"  v-for="(item,index) in recommend" :key="index">
    <a :href="item.link">
      <img class="home_girdimage" :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </van-grid-item>

</van-grid>
  </div>
</template>

<script>
export default {
  name:"HomeRecommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.Homerecommendgird {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  text-align: center;
  justify-content: space-between;
}
.home_girdimage {
  flex:1;
  width:65px;
  margin-bottom: 5px;
}
.Homerecommendgirditem {
  padding: 0;
  font-size: 12px;
}
</style>