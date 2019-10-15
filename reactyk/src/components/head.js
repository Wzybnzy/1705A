import React, { Component } from 'react'
import {NavLink,withRouter} from 'react-router-dom'
class Head extends Component {
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
        flag:false,
        sticky:false
    }
    render() {
        let {list,flag,sticky} = this.state;
        return (
            <>
                <div className="title">
                    <p>汽车之家</p>
                    <span onClick={this.handleClickSearch.bind(this)}>搜索</span>
                    <span>我的</span>
                </div>
                <div className={`titlelist ${sticky ? 'sticky' :''} `}>
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
                <div className={flag ? 'mark' : 'none'} onClick={()=>{
                    this.setState({flag:false})
                }}>
                    <div className="nav">金融</div>
                </div>
            </>
        )
    }

    componentDidMount(){
        document.addEventListener('scroll',this.handleScroll);
    }
    handleScroll = ()=>{
        let {sticky} = this.state;
        console.log(document.documentElement.scrollTop);
        if(document.documentElement.scrollTop > 44){ //吸顶
            this.setState({sticky:true})
        } else {
            this.setState({sticky:false})

        }
    }
    handleClickSearch(){
        console.log(this.props);
        this.props.history.push('/search');
    }
}


export default  withRouter(Head);