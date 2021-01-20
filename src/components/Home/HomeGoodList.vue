<template>
 <van-list v-model="loading" :finished="finished"   finished-text="没有更多了" @load="onLoad" class="goodlist">
      <good-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item"></good-list-item>
 </van-list>
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
     loading: false,
     finished: false
   }
  },
  watch: {
    listloading: {
      handleloading() {
        this.loading == this.listloading ? this.loading = this.listloading : ''
      }
    }
  },
  methods: {
    onLoad() {
      this.$emit('loadmore')
      this.loading = false
    }
  }
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
