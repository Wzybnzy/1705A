// import Index from "../views/index";
import Loadable from 'react-loadable';
import React from 'react';
// import Home from '../views/index/home/home';

function Loading(){
    return <div>loading...</div>
}

const Index = Loadable({
    loader: ()=> import('../views/index/index'),
    loading:Loading
})
const Home = Loadable({
    loader: ()=> import('../views/index/home/home'),
    loading:Loading
})

const Login = Loadable({
    loader: ()=> import('../views/login/login'),
    loading:Loading
})

const Register = Loadable({
    loader: ()=> import('../views/register/register'),
    loading:Loading
})

const Vote = Loadable({
    loader: ()=> import('../views/vote/vote'),
    loading:Loading
})
const Createvote = Loadable({
    loader: ()=> import('../views/createvote/createvote'),
    loading:Loading
})

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
                path:'/index',
                to:'/index/home'
            }
        ]
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/vote',
        component:Vote
    },
    {
        path:'/createvote',
        component:Createvote
    },
    {
        path:'/',
        to:'/index'
    }
];

export default routes;
