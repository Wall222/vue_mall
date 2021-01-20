import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('components/Home/Home.vue')
const Cate = () => import('components/Cate/Cate.vue')
const ShoppingCar = () => import('components/ShoppingCar/ShoppingCar.vue')
const Profile = () => import('components/Profile/Profile.vue')
const Detail = () => import('components/Detail/Detail.vue')


Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home, meta: { keepAlive: true } },
  { path: '/', redirect: '/home' },
  { path: '/category', component: Cate, meta: { keepAlive: true } },
  { path: '/shoppingcar', component: ShoppingCar, meta: { keepAlive: true } },
  { path: '/profile', component: Profile, meta: { keepAlive: true } },
  { path: '/detail', component: Detail },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition && to.meta.keepAlive) {
      return savedPosition
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 1 })
      }, 0)
    })
  }
})



export default router
