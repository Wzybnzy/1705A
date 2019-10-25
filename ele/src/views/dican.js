import React, { Component } from 'react'
import axios from 'axios'
import '../mock/index'
import Item from '../components/item'
import BScroll from 'better-scroll'
import {connect} from 'react-redux'
 class Dican extends Component {
    state = {
        list: [],
        ind: 0,
        scrollH:[]
    }
    render() {
        let { list, ind } = this.state;
        let {buyList} = this.props;
        console.log(buyList);
        let sum = buyList.reduce((prev,cur)=> prev + cur.count,0)
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
                                        className={index == ind ? 'active' : ''}>{item.name}{item.num ? item.num : ''}</li>)
                            }
                        </ul>
                    </div>
                    <div className="right">
                        <div ref="right">
                            {
                                list && list.map((item, index) =>
                                    <Item key={index} item={item} ind={index} changecount={this.handleChangeCount.bind(this)}/>)
                            }
                        </div>

                    </div>
                </div>
                <footer>购物车{sum}</footer>
            </div>
        )
    }
    handleChangeCount(ind,index,count){ //点击右侧加减的时候触发的事件
        // console.log('触发函数',ind,index,count);
        let {list} = this.state;
        list[ind].foods[index].count = count; 

        list.forEach(item => {
            item.num = item.foods.reduce((prev,cur)=> prev + cur.count,0)
        })

        this.setState({list})
    }
    async componentDidMount() {
        let res = await axios.get('/api/list');
        console.log(res);
        res.data.goods.forEach(item => {
            item.num = 0; //左侧的数量
            item.foods.map(item1 => item1.count = 0)
        })

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

        this._initScroll();
       
    }
    _initScroll(){
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
            scrollH.forEach((item,index) => {
                if(scrollY >= item && scrollY < scrollH[index +1]){
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


export default connect((state)=>{
    return {
        buyList:state.list.list
    }
},(dispatch)=>{
    return {

    }
})(Dican)