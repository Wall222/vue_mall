<template>
  <div v-if="Object.keys(goodsInfo).length !== 0">
    <div class="info_title">{{goodsInfo.title}}</div>
    <div class="price">
      <span class="nowprice">{{goodsInfo.price}}</span>
      <span class="oldprice">{{goodsInfo.oldPrice}}</span>
      <span v-if="goodsInfo.discount" class="discount" :style="{backgroundColor:goodsInfo.discountBgColor}">{{goodsInfo.discount}}</span>
    </div>
    <div class="otherInfo">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.service[goodsInfo.service.length - 2].name}}</span>
    </div>
  </div>
</template>

<script>
 export default {
  name: '',
  props: {
    goodsInfo:{
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
.info_title {
  margin:10px 15px;
  font-size: 15px;
}
.price {
  position: relative;
  margin-left:15px;
  font-size: 18px;
}

.nowprice {
  color: #FF89A5;
  margin-right: 10px ;
}
.oldprice {
  font-size: 10px;
  text-decoration:line-through;
}
.discount {
  position: absolute;
  font-size: 10px;
  color: #fff;
  background-color: #FF89A5;
  border-radius: 4px;
}
.otherInfo {
  margin:10px 15px;
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: solid 1px rgba(0,0,0,.3);
}
 
</style>
