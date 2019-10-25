import {Switch,Route,Redirect} from 'react-router-dom'
import React from 'react'

function RouterView(props){
    const {routes} = props; 
    const routesArr = routes && routes.filter(item => !item.to);
    const RedirectArr = routes && routes.filter(item => item.to).map((item,index) => <Redirect key={index} from={item.path} to={item.to}/>)
    return <Switch>
            {
                routesArr && routesArr.map((item,index) => <Route key={index} path={item.path} render={(props)=>{
                    return <item.component {...props} child={item.children}/>
                }}/>).concat(RedirectArr)
            }
        </Switch>
}

export default RouterView;
