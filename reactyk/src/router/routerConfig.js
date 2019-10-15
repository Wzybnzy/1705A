import React from 'react'

// import Index from '@/views/index/index'
// import Login from '@/views/login/login'
// import Search from '@/views/search/search'
// import My from '@/views/my/my'
// import Home from '@/views/index/home/home'
// import Find from '@/views/index/find/find'
// import Frunt from '@/views/index/frunt/frunt'


import Loadable from 'react-loadable'

function Loading(){
    return <div>loading.....</div>
}

const Index = Loadable({
    loader:()=> import('@/views/index/index'),
    loading:Loading
})

const Login = Loadable({
    loader:()=> import('@/views/login/login'),
    loading:Loading
})

const Search = Loadable({
    loader:()=> import('@/views/search/search'),
    loading:Loading
})

const My = Loadable({
    loader:()=> import('@/views/my/my'),
    loading:Loading
})

const Home = Loadable({
    loader:()=> import('@/views/index/home/home'),
    loading:Loading
})

const Find = Loadable({
    loader:()=> import('@/views/index/find/find'),
    loading:Loading
})

const Frunt = Loadable({
    loader:()=> import('@/views/index/frunt/frunt'),
    loading:Loading
})

const routes = [
    {
        path: '/index',
        component: Index,
        children: [
            {
                path: '/index/home',
                component: Home
            },
            {
                path: '/index/find',
                component: Find
            },
            {
                path: '/index/frunt',
                component: Frunt
            },
            {
                from:'/index',
                to:'/index/home'
            }
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/my',
        component: My
    },
    {
        from:'/',
        to:'/index'
    }
];


export default routes;