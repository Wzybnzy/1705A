const Index = ()=>import('@/views/index/index.vue');
const Home = ()=>import('@/views/index/home/home.vue');
const Classify = ()=>import('@/views/index/classify/classify.vue');
const Car = ()=>import('@/views/index/car/car.vue');
const My = ()=>import('@/views/index/my/my.vue');
const Super = ()=>import('@/views/index/home/super/super.vue');
const Selection = ()=>import('@/views/index/home/selection/selection.vue');
const Address = ()=>import('@/views/address/address.vue');
const Editadd = ()=>import('@/views/editadd/editadd.vue');
const Detail = ()=>import('@/views/detail/detail.vue');

const routes = [
    {
        path:'/index',
        name:'index',
        component:Index,
        children:[
            {
                path:'home',
                name:'home',
                component:Home,
                redirect:{name:'super'},
                children:[
                    {
                       path:'super',
                       name:'super',
                       component:Super 
                    },
                    {
                        path:'selection',
                        name:'selection',
                        component:Selection 
                     }
                ]
            },
            {
                path:'classify',
                name:'classify',
                component:Classify
            },
            {
                path:'car',
                name:'car',
                component:Car
            },
            {
                path:'my',
                name:'my',
                component:My
            }
        ]
    },
    {
        path:'/address',
        name:'address',
        component:Address
    },
    {
        path:'/editadd',
        name:'editadd',
        component:Editadd
    },
    {
        path:'/detail/:id',
        name:'detail',
        component:Detail
    },
    {
        path:'/',
        redirect:'/index/home/super'
    }
]


export default routes;