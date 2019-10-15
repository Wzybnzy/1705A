import React from 'react'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'

import Index from '@/views/index/index'
import Login from '@/views/login/login'
import Search from '@/views/search/search'
import My from '@/views/my/my'

function RootRouter(){
    return <BrowserRouter>
        <Switch>
            <Route path="/index" component={Index}/>
            <Route path="/search" component={Search}/>
            <Route path="/login" component={Login}/>
            <Route path="/my" component={My}/>
            <Redirect from="/" to="/index"/>
        </Switch>
    </BrowserRouter>
}


export default RootRouter;