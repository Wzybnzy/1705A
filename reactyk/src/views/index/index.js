import React, { Component } from 'react'
import Head from '@/components/head'

import Routerview from '@/router/routerview'
export default class Index extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="index">
                <Head/>
                <Routerview routes={this.props.child}/>
                {/* <Switch>
                    <Route path="/index/home" component={Home}/>
                    <Route path="/index/find" component={Find}/>
                    <Route path="/index/frunt" component={Frunt}/>
                    <Redirect from="/index" to="/index/home"/>
                </Switch> */}
                
            </div>
        )
    }
}
