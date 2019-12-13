import Vue from 'vue'
import Router from 'vue-router'
import routes from './routerConfig'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//全局守卫
router.beforeEach((to, from, next) => { // [{path:'/index',query:{}},'/index/car']  ['/home']
  console.log(to.matched, '&&&&&&&&&&&&&&&&&&&')
  if (to.matched.some(item => item.meta.required)) { //需要守卫

    //判断是否登录
    if (!window.localStorage.token) { //没有登录
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }

  } else {
    next();
  }
})


//设置标题
router.afterEach((to, from) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = '1705A'
  }
})

export default router;