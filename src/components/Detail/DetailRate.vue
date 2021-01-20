<template>
  <div>
    <div class="rate_top">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="rate" v-for="item in rate.list" :key="item.rateId">
      <img class="user_avatar" :src="item.user.avatar" alt="">
      <span class="username">{{item.user.uname}}</span>
      <div class="rate_content">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
 export default {
   props: {
     rate: {
       type: Object
     }
   },
  name: '',
  data () {
   return {

   }
  },
 }
</script>

<style lang="less" scoped>
  .rate {
  position: relative;
  margin: 10px 15px;
  padding-bottom: 20px;
   border-bottom: solid 2px rgba(0,0,0,.2);
}
  .rate_top {
    display: flex;
    justify-content: space-between;
    margin:20px 15px;
    font-size: 12px;
    border-bottom: solid 1px rgba(0,0,0,.2);
    padding-bottom: 15px;
  }
  .user_avatar {
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }
  .username {
    position: absolute;
    font-size: 14px;
    top: 20px;
    left: 70px;
  }
  .rate_content {
    font-size: 12px;
    margin-top: 15px;
  }
 
</style>
