import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/Home.vue'  //静态加载
import routes from './routerConfig'
Vue.use(Router)  //注册组件   install()

export default new Router({
  mode: 'history', //设置路由模式  history  hash
  // linkActiveClass:'active',
  routes
})
