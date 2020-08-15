import Vue from 'vue'
import App from './App.vue'

import './config/vant'
import router from './router'
import store from './store'

import 'amfe-flexible/index.min.js'
import '@/styles/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
