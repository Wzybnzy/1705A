import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import axios from 'axios'

Vue.config.productionTip = false
// Vue.component('aa',{});
Vue.prototype.$http = axios;

// Vue.prototype.$bus = new Vue();  非父子传参 

new Vue({
  router,
  store,
  render: h => h(App) 
}).$mount('#app')
