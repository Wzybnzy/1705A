import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import Toast from './vendor/toast.js'

Vue.use(Toast); //install

// Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
