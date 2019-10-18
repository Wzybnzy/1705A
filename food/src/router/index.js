import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import RouterView from './routerview'
import routes from './routerConfig'

function RootRouter(){
    return <BrowserRouter>
        <RouterView routes={routes}/>
    </BrowserRouter>
}

export default RootRouter;


