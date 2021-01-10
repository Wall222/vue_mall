import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'components/Home/Home.vue'
import Cate from 'components/Cate/Cate.vue'
import ShoppingCar from 'components/ShoppingCar/ShoppingCar.vue'
import Profile from 'components/Profile/Profile.vue'


Vue.use(VueRouter)

const routes = [
  {path:'/home',component:Home},
  {path:'/',redirect:'/home'},
  {path:'/category',component:Cate},
  {path:'/shoppingcar',component:ShoppingCar},
  {path:'/profile',component:Profile}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
