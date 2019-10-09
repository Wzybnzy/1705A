import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/Home.vue'  //静态加载
import routes from './routerConfig'
Vue.use(Router)  //注册组件   install()

const router = new Router({
  mode: 'history', //设置路由模式  history  hash
  // linkActiveClass:'active',
  routes
})

// let arr = ['book','rank']; //需要守卫的路由

router.beforeEach((to,from,next)=>{
  console.log(to);
  if(to.matched.some(item => item.meta.requiresAuth)){ //需要守卫
      //是否登录
      if(!window.localStorage.user){ //没有登录
          next({
            path:'/login',
            query:{redirect:to.fullPath}
          });
      } else {
        next();
      }

  } else {
    next();
  }
})


router.afterEach((to,from)=>{
  console.log(to);
  if(to.meta && to.meta.title){
    document.title = to.meta.title;
  } else {
    document.title='1705A'
  }
})

export default  router;