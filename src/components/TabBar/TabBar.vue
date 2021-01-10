<template>
<van-tabbar v-model="active" route>
  <van-tabbar-item replace to="/home"  name="home" icon="wap-home">首页</van-tabbar-item>
  <van-tabbar-item replace to="/category"  name="search" icon="shop">分类</van-tabbar-item>
  <van-tabbar-item replace to="/shoppingcar"  name="friends" icon="shopping-cart">购物车</van-tabbar-item>
  <van-tabbar-item replace to="/profile"  name="setting" icon="manager">我的</van-tabbar-item>
</van-tabbar>
</template>

<script>
export default {
    name: "TabBar",
     data() {
    return {
      active: 'home',
    }
}
}
</script>

<style>

</style>