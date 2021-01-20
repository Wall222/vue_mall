<template>
  <div v-if="Object.keys(shopInfo).length !== 0" class="shop_info">
    <div class="shop_service">
      <span>
        <van-icon name="passed" />{{shopInfo.services[0].name}}
      </span>
      <span>
        <van-icon name="passed" />{{shopInfo.services[1].name}}
      </span>
      <span>
        <van-icon name="passed" />{{shopInfo.services[3].name}}
      </span>
    </div>
    <div class="shop_top">
      <img class="shoplogo" :src="shopInfo.shopLogo" alt="">
      <span class="shopname">{{shopInfo.name}}</span>
    </div>
    <div class="shop_middle">
      <div class="shop_middle_left">
        <div class="sells_count">
          {{shopInfo.cSells}}
          <div class="count_text">总销量</div>
        </div>
        <div class="goods_count">
          {{shopInfo.cGoods}}
          <div class="count_text">商品数</div>
        </div>
      </div>
      <div class="shop_middle_right">
        <div class="score_name">
          <ul>
            <li>{{shopInfo.score[0].name}}</li>
            <li>{{shopInfo.score[1].name}}</li>
            <li>{{shopInfo.score[2].name}}</li>
          </ul>
        </div>
        <div class="score">
          <ul>
            <li :class="{'score_better': shopInfo.score[0].isBetter}">{{shopInfo.score[0].score}}</li>
            <li :class="{'score_better': shopInfo.score[1].isBetter}">{{shopInfo.score[1].score}}</li>
            <li :class="{'score_better': shopInfo.score[2].isBetter}">{{shopInfo.score[2].score}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="shop_bottom">
      进店逛逛
    </div>
  </div>

</template>

<script>
 export default {
  name: '',
  props: {
    shopInfo: {
      type: Object
    }
  },
  data () {
   return {

   }
  },
 }
</script>

<style lang="less" scoped>
.shop_info {
  padding-bottom: 20px;
  border-bottom: solid 3px rgba(0, 0, 0, 0.2);
}
.shop_top {
  position: relative;
  .shoplogo {
    display: inline-block;
    height: 50px;
    width: 50px;
  border-radius: 25px;
  overflow: hidden;
  margin-left: 20px;
  margin-right: 0;
  border: solid 1px rgba(0, 0, 0, 0.2);
  }
  .shopname {
    position: absolute;
    top: 18px;
    font-size: 14px;
  }
}
  .shop_service {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    margin: 20px 15px;
    padding-bottom: 20px;
     border-bottom: solid 3px rgba(0, 0, 0, 0.2);
  }
  .shop_middle {
    position: relative;
    margin-bottom: 20px;
    .shop_middle_left {
    display: flex;
    justify-content: space-around;
    width: 150px;
    margin-left: 15px;
    margin-top: 20px;
    font-size: 14px;
    text-align: center;
    border-right: solid 1px rgba(0, 0, 0, 0.2);
        .count_text {
      margin-top: 10px;
    }
    }
    .shop_middle_right {
      position: absolute;
      font-size: 10px;
      top: -1px;
      right: 160px;
      margin-top: 3px;
      .score_name {
        position: absolute;
        width: 60px;
      }
      .score {
        position: absolute;
        left: 80px;
        text-align: center;
        color:green;
      }
      .score_better {
        color: red;
      }
    }
  }
     .shop_bottom {
        width: 120px;
        height: 20px;
        line-height: 20px;
        background-color: #ccc;
        font-size: 12px;
        margin: 0 auto;
        border-radius: 5px;
        text-align: center;
      }
 
</style>
