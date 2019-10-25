import React, { Component } from 'react'
import axios from 'axios'
import '../mock/index'
import Item from '../components/item'
import BScroll from 'better-scroll'

export default class Dican extends Component {
    state = {
        list: [],
        ind: 0,
        scrollH:[]
    }
    render() {
        let { list, ind } = this.state;
        return (
            <div>
                <ul className="title">
                    <li>点餐</li>
                    <li>评价</li>
                    <li>商家</li>
                </ul>
                <div className="content">
                    <div className="left">
                        <ul>
                            {
                                list && list.map((item, index) =>
                                    <li
                                        key={index}
                                        onClick={this.handleChangeTab.bind(this, index)}
                                        className={index == ind ? 'active' : ''}>{item.name}</li>)
                            }
                        </ul>
                    </div>
                    <div className="right">
                        <div ref="right">
                            {
                                list && list.map((item, index) =>
                                    <Item key={index} item={item} ind={index} />)
                            }
                        </div>

                    </div>
                </div>
                <footer>购物车</footer>
            </div>
        )
    }
    async componentDidMount() {
        let res = await axios.get('/api/list');
        this.setState({ list: res.data.goods })
        let {scrollH} = this.state;

        //获取每一个盒子距离页面顶部的距离
        let child = Array.from(this.refs.right.children);
        let last = child[child.length -1];
        child.forEach(item => {
            scrollH.push(item.offsetTop -45);
        })
        scrollH.push(last.offsetHeight + last.offsetTop);
        this.setState({scrollH})
        console.log(scrollH);

        new BScroll('.left', {
            click: true
        });
        this.rightBScroll = new BScroll('.right', {
            click: true,
            probeType:3
        });

        this.rightBScroll.on('scroll',({y})=>{
            let scrollY = Math.abs(y);
            let {scrollH} = this.state;
            // console.log(scrollH);
            scrollH.forEach((item,index) => {
                if(scrollY >= item && scrollY < scrollH[index +1]){
                    console.log(index,'$$$$$$');
                    this.setState({ind:index})
                }
            })
        });
    }
    handleChangeTab(index) {
        this.setState({ ind: index })
        this.rightBScroll.scrollToElement('.title'+index, 100);
    }
}
