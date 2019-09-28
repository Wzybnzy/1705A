const routes = [
    {
        path: '/index',
        name: 'index', //命名路由  params{}  
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('@/views/index/home/home.vue')
            },
            {
                path: 'classify',
                name: 'classify',
                component: () => import('@/views/index/classify/classify.vue')
            }, {
                path: 'ranking',
                name: 'ranking',
                component: () => import('@/views/index/ranking/ranking.vue')
            }, {
                path: 'book',
                name: 'book',
                component: () => import('@/views/index/book/book.vue')
            }
        ],
        component: () => import('@/views/index/index.vue')
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('@/views/detail/detail.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue')
    }, {
        path: '/',
        redirect: '/index/home'
    }
];

export default routes;