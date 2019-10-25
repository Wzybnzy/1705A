import Loadable from 'react-loadable'
import React from 'react'

function Loading(){
    return <div>...loading</div>
}


const Dican = Loadable({
    loader:()=> import('../views/dican'),
    loading:Loading
})
const Comment = Loadable({
    loader:()=> import('../views/comment'),
    loading:Loading
})
const Bussi = Loadable({
    loader:()=> import('../views/bussi'),
    loading:Loading
})
const routes = [
    {
        path:'/dican',
        component:Dican
    },
    {
        path:'/comment',
        component:Comment
    },
    {
        path:'/bussi',
        component:Bussi
    },
    {
        path:'/',
        to:'/dican'
    }
]


export default routes;