import React from 'react'
// import Index from

import Loabable from 'react-loadable'

function Loading(){
    return <div>loading.....</div>
}

const Index  =  Loabable({
    loader: ()=> import('../views/index/index'),
    loading:Loading
}); 
const Home  =  Loabable({
    loader: ()=> import('../views/index/home/home'),
    loading:Loading
}); 
const Rank  =  Loabable({
    loader: ()=> import('../views/index/rank/rank'),
    loading:Loading
}); 
const My  =  Loabable({
    loader: ()=> import('../views/index/my/my'),
    loading:Loading
}); 

const Classify  =  Loabable({
    loader: ()=> import('../views/classify/classify'),
    loading:Loading
});


const Coll  =  Loabable({
    loader: ()=> import('../views/coll/coll'),
    loading:Loading
});

const routes = [
    {
        path:'/index',
        component: Index,
        children:[
            {
                path:'/index/home',
                component:Home
            },
            {
                path:'/index/rank',
                component:Rank
            },
            {
                path:'/index/my',
                component:My
            },
            {
                path:'/index',
                to:'/index/home'
            }
        ]
    },
    {
        path:'/classify/:type',
        component: Classify
    },
    {
        path:'/coll',
        component: Coll
    },
    {
        path:'/',
        to:'/index'
    }
];


export default routes;
