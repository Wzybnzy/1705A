import React, { Component } from 'react'
import axios from 'axios'
import '@/mock/index'


export default class Home extends Component {
    state = {
        list:[]
    }
    render() {
        let {list} = this.state;
        return (
            <div>
                {
                    list && list.map((item,index) => <dl key={index}>
                    <dt>
                        <img src={item.img}/>
                    </dt>
                    <dd>
                        <h3>{item.title}</h3>
                        <p>价格:{item.price}</p>
                    </dd>
                </dl>)
                }
            </div>
        )
    }
    async componentDidMount(){
        let res = await axios.get('/api/list');
        console.log(res);
        this.setState({list:res.data.list})
    }
}
