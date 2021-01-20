<template>
  <div>
    <div v-for="(item,index) in detailImage" :key="index" class="detail_img">
      <img class="detail_img" v-for="(item1,index) in item.list" :src="item1" :key="index" alt="">
    </div>

  </div>
</template>

<script>
 export default {
  name: '',
  props: {
    detailImage: {
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
.detail_img {
  width: 100%;
}
 
</style>
