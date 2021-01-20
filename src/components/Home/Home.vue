<template>
  <div class="home">
      <van-nav-bar id="home_navbar" title="购物街" :fixed="true"/>
          <home-swipe :banner='banner'></home-swipe>
        <home-recommend :recommend='recommend'></home-recommend>
        <feature/>
        <home-tab :activeName="activeName" @tabClick="changeActiveName" sticky class="hometab"></home-tab>
        <home-good-list :goods="goodsList[activeName].list"  @loadmore="loadmore"></home-good-list>
         <back-top @click.native="backTopClick" v-show="backtop"></back-top>
</div>
</template>

<script>
import {getHomeMultidata,getGoodsList} from 'network/home.js'
import HomeSwipe from './HomeSwipe.vue'
import HomeRecommend from './HomeRecommend'
import Feature from './Feature'
import HomeTab from './HomeTab'
import HomeGoodList from './HomeGoodList'
import BackTop from './BackTop'

export default {
  name: "Home",
  components: {
    HomeSwipe,
    HomeRecommend,
    Feature,
    HomeTab,
    HomeGoodList,
    BackTop
  },
  data() {
    return {
      banner: [],
      recommend: [],
      activeName: 'pop',
      backtop: false,
      loading: false,
      finished: false,
      saveY:0,
      goodsList: {
        pop: {page:0,list:[]},
        new: {page:0,list:[]},
        sell: {page:0,list:[]}
      }
    }
  },
     mounted() {
      this.getHomeMultidata()
      this.getGoodsList('pop')
      this.getGoodsList('new')
      this.getGoodsList('sell')
   },

  methods: {
    async getHomeMultidata() {
      const {data : res} = await getHomeMultidata()
      // console.log(res);
      this.banner = res.banner.list
      this.recommend = res.recommend.list
    },
    async getGoodsList(type) {
      let page = this.goodsList[type].page + 1
      const {data : res} = await getGoodsList(type,page)
      this.goodsList[type].list.push(...res.list)
      this.goodsList[type].page += 1
    },
    changeActiveName(activeName) {
      this.activeName = activeName
    },
    handleScroll() {
      let scrolltop = document.documentElement.scrollTop
      scrolltop > 300 ? (this.backtop = true) : (this.backtop = false);
    },
    backTopClick() {
      
      let top = document.documentElement.scrollTop
      // 实现滚动效果 
      const timeTop = setInterval(() => {
      document.documentElement.scrollTop = top -= 100;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
  },
  loadmore() {
    this.getGoodsList(this.activeName)
  },
  }
}
</script>

<style lang="less" >
 .home #home_navbar {
   background-color:#FF89A5;
   width: 100%;
   height: 40px;
   z-index: 9;
}

.home .van-nav-bar__title {
  color: #fff;
}
.van-nav-bar__content {
  height: 40px;
}
.hometab {
  position: sticky;
  top:40px;
}


</style>