import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugins/qiankun'
import './router/interceptor'; // 路由拦截器

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#js-container')
