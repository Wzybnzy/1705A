const routes = [
    {
        path: '/index',
        name: 'index', //命名路由  params{}  
        children: [
            {
                path: 'home',
                name: 'home',
                meta:{
                    requiresAuth:false,
                    title:'首页'
                },
                component: () => import('@/views/index/home/home.vue')
            },
            {
                path: 'classify',
                name: 'classify',
                meta:{
                    title:'分类',
                    requiresAuth:false
                },
                component: () => import('@/views/index/classify/classify.vue')
            }, {
                path: 'ranking',
                name: 'ranking',
                meta:{
                    title:'排行',
                    requiresAuth:false
                },
                component: () => import('@/views/index/ranking/ranking.vue')
            }, {
                path: 'book',
                name: 'book',
                meta:{
                    title:'书架',
                    requiresAuth:true
                },
                component: () => import('@/views/index/book/book.vue')
            }
        ],
        component: () => import('@/views/index/index.vue')
    },
    {
        path: '/detail/:id',
        name: 'detail',
        meta:{
            requiresAuth:false
        },
        component: () => import('@/views/detail/detail.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta:{
            title:'登录',
            requiresAuth:false
        },
        component: () => import('@/views/login/login.vue')
    }, {
        path: '/',
        redirect: '/index/home'
    }
   
];

export default routes;