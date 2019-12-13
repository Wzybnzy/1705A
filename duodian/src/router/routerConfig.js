const routes = [
    {
        path: '/index',
        name: 'index',
        children:[
            {
                path:'home',
                name:'home',
                meta:{
                    required:true,
                    title:'首页'
                },
                component:()=> import('@/views/index/home/home.vue')
            },
            {
                path:'classify',
                name:'classify',
                meta:{
                    required:false,
                    title:'分类'
                },
                component:()=> import('@/views/index/classify/classify.vue')
            },
            {
                path:'car',
                name:'car',
                meta:{
                    required:true,
                    title:'购物车'
                },
                component:()=> import('@/views/index/car/car.vue')
            }, {
                path:'my',
                name:'my',
                meta:{
                    required:true,
                    title:'我的'
                },
                component:()=> import('@/views/index/my/my.vue')
            }
        ],
        component: () => import('@/views/index/index.vue')
    },
    {
        path: '/detail/:',
        name: 'detail',
        meta:{
            required:false,
            title:'详情'
        },
        component: () => import('@/views/detail/detail.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta:{
            required:false,
            title:'登录'
        },
        component: () => import('@/views/login/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        meta:{
            required:false,
            title:'注册'
        },
        component: () => import('@/views/register/register.vue')
    },
    {
        path:'/',
        redirect:'/index/home'
    }
];

export default routes;