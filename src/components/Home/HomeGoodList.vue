<template>
 <div class="goodlist">
   <good-list-item v-for="item in goods" :key="item.iid" :goodsItem="item"></good-list-item>
 </div>
</template>

<script>
import GoodListItem from './GoodListItem'
 export default {
  name: 'HomeGoodList',
  components: {
    GoodListItem
  },
  props: {
    goods: {
      type : Array
    }
  },
  data () {
   return {

   }
  },
 }
</script>

<style lang="less" scoped>
  .goodlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    padding-bottom: 60px;
  }
</style>
