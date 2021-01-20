<template>
  <div>
    <van-nav-bar id="detail_navbar" left-text="返回" left-arrow title="购物街" :fixed="true">
      <template #title>
        <van-tabs v-model="active" class="navtabs" title-active-color="#FF89A5" @click="scroll" sticky @scroll="toggleTab">
          <van-tab v-for="(item,index) in tabList" :title="item.title" :name="item.name" :key="index"></van-tab>
        </van-tabs>
      </template>
    </van-nav-bar>
    <detail-swipe class="goods" :topImages="itemInfo.topImages"></detail-swipe>
    <detail-goods-info :goodsInfo="goodsInfo"></detail-goods-info>
    <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
    <detail-image :detailImage="detailImage"></detail-image>
    <detail-params class="params" ref="paramsRef" :itemParams="itemParams"></detail-params>
    <detail-rate class="rate" ref="rateRef" :rate="rate"></detail-rate>
    <recommend class="recommend" ref="recommendRef" :recommendList="recommendList"></recommend>
  </div>
</template>

<script>
import { getDetailsData, Goods,getRecommend } from 'network/detail'
import DetailSwipe from './DetailSwipe'
import DetailGoodsInfo from './DetailGoodsInfo'
import DetailShopInfo from './DetailShopInfo'
import DetailImage from './Detailimage'
import DetailParams from './DetailParams'
import DetailRate from './DetailRate'
import Recommend from './Recommend'
 export default {
  name: 'Detail',
  components: {
    DetailSwipe,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailImage,
    DetailParams,
    DetailRate,
    Recommend
  },
  data () {
   return {
     iid:'',
     active:1,
     tabList:[{title:'商品',name:'goods'},
              {title:'参数',name:'params'},
              {title:'评论',name:'rate'},
              {title:'推荐',name:'recommend'}
     ],
     itemInfo:{topImages:[]},
     goodsInfo: {},
     shopInfo: {},
     detailImage:[],
     itemParams:{},
     rate:{},
     recommendList:[],
     scrolltop:0,
     paramsScrollTop:0,
     rateScrollTop:0,
     recommendScrollTop:0
   }
  },
  created() {
    this.getDetailsData()
    this.getRecommend()
  },
  mounted() {
    window.onload = () => {
    if(this.$refs.paramsRef) {
      console.log(this.$refs.paramsRef.$el.offsetTop)
    }

      // console.log(this.$refs.paramsRef.$el.offsetTop);
      // console.log(this.$refs.paramsRef);
    }
  },
  methods: {
    async getDetailsData() {
      this.iid = this.$route.query.iid
      const {result:res} = await getDetailsData(this.iid)     
      this.itemInfo.topImages = res.itemInfo.topImages
      this.goodsInfo = new Goods(res.itemInfo,res.columns,res.shopInfo.services)
      this.shopInfo = res.shopInfo
      this.detailImage = res.detailInfo.detailImage
      this.itemParams = res.itemParams
      this.rate = res.rate
    },
    async getRecommend() {
      const {data:res} = await getRecommend()
      console.log(res);
      this.recommendList = res.list
    },
    scroll(name) {
      this.scrolltop = document.querySelector(`.${name}`).offsetTop
      console.log(this.scrolltop);
      switch(name) {
        case 'goods':
          document.documentElement.scrollTop = this.scrolltop
          break
        case 'params':
          document.documentElement.scrollTop = this.scrolltop
          break
        case 'rate':
          document.documentElement.scrollTop = this.scrolltop
          break
        case 'recommend' :
          document.documentElement.scrollTop = this.scrolltop
          break
      }
    },
    toggleTab(scrollTop) {
      this.paramsScrollTop = this.$refs.paramsRef.$el.offsetTop
      this.rateScrollTop = this.$refs.rateRef.$el.offsetTop
      this.recommendScrollTop = this.$refs.rateRef.$el.offsetTop
      console.log(this.paramsScrollTop);
      console.log(this.rateScrollTop);
      console.log(this.recommendScrollTop);
      if(scrollTop < this.paramsScrollTop) {
        this.active = 'goods'
      } else if (scrollTop < this.rateScrollTop) {
        this.active = 'params'
      } else if (scrollTop < this.recommendScrollTop) {
        this.active = 'rate'
      } else if (scrollTop > this.recommendScrollTop) {
        this.active = 'recommend'
      }
    }
  }
 }
</script>

<style lang="less" scoped>
.navtabs {
  width: 220px;
}

</style>
