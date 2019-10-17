import React from 'react'
import {Switch,Route,Redirect}  from 'react-router-dom'


function RouterView(props){
    let {routes} = props;
    let RouteArr = routes && routes.filter(item => !item.to);
    let RedirectArr = routes && routes.filter(item => item.to).map((item,index) => <Redirect from={item.path} to={item.to} key={index}/>)
    return <Switch>
            {
                RouteArr && RouteArr.map((item,index) => <Route key={index} path={item.path} render={(props)=>{
                    return <item.component {...props} child={item.children}/>
                }}/>).concat(RedirectArr)
            }
        </Switch>
}

export default RouterView;