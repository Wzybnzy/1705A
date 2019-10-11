import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import Toast from './vendor/toast.js'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload,{
  preLoad: 1.3,
  loading: require('@/img/timg.gif'),
  attempt: 1
});
Vue.use(Toast); //install

// Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
