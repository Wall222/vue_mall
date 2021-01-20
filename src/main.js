import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import './network/request.js'
import request from './network/request.js'

Vue.config.productionTip = false
Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// async function get1(){ const { data : res } =await request({
//   method: 'get',
//   url: '/home/multidata'
// })
// console.log(res);
// }
// get1()