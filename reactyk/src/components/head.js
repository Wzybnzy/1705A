import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Head extends Component {
    state = {
        list:[
            {
               name:'首页',
               link:'/index/home'
            },
            {
                name:'找车',
                link:'/index/find'
             },
             , {
                name:'论坛',
                link:'/index/frunt'
             },
             {
                name:'二手车',
                link:'/index/find'
             },
             {
                name:'服务',
                link:'/index/find'
             }
        ],
        flag:false
    }
    render() {
        let {list,flag} = this.state;
        return (
            <div>
                <div className="title">
                    <p>汽车之家</p>
                    <span>搜索</span>
                    <span>我的</span>
                </div>
                <div className="titlelist">
                    <ul>
                        {
                            list && list.map((item,index) => 
                            <li key={index}>
                                <NavLink to={item.link}>{item.name}</NavLink>
                            </li>)
                        }
                    </ul>
                    <img 
                    className={flag ? 'imgactive' :''}
                    src={require('@/img/timg.jpg')} onClick={()=>{
                        this.setState({flag:!flag})
                    }}/>
                </div>
            </div>
        )
    }
}
