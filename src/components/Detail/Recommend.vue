<template>
  <div class="recommend_list" v-if="recommendList.length !== 0">
    <div class="goods-item" v-for="item in recommendList" :key=" item.item_id">
      <div>
        <img :src="item.image" alt="">
        <div class="goods-info">
          <p>{{item.title}}</p>
          <span class="price">{{item.price}}</span>
          <span class="collect">
            <van-icon name="star-o" />{{item.cfav}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
  name: '',
  props: {
    recommendList: {
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
.recommend_list {
      display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
    padding-bottom: 60px;
}
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 49%;
    margin: 0 1px;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

    .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background:  0 0/14px 14px;
  }
 
 
</style>
