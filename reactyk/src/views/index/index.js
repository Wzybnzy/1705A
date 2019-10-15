import React, { Component } from 'react'
import Head from '@/components/head'
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from '@/views/index/home/home'
import Find from '@/views/index/find/find'
import Frunt from '@/views/index/frunt/frunt'
export default class Index extends Component {
    render() {
        return (
            <div>
                <Head />
                <Switch>
                    <Route path="/index/home" component={Home}/>
                    <Route path="/index/find" component={Find}/>
                    <Route path="/index/frunt" component={Frunt}/>
                    <Redirect from="/index" to="/index/home"/>
                </Switch>
                
            </div>
        )
    }
}
