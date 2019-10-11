import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import 'swiper/css/swiper.min.css'
import Toast from './vendor/toast'

Vue.use(Toast); //install


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
