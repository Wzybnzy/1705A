import React, { Component } from 'react'
import {connect} from 'react-redux'
import {ADD_SHOP} from '../store/types'
class Item extends Component {
    render() {
        let { item,ind } = this.props;
        return (
            <div className={`title${ind}`}>
                <h3>{item.name}</h3>
                {
                    item.foods && item.foods.map((item1, index1) => <dl key={index1}>
                        <dt>
                            <img src={item1.image}/>
                        </dt>
                        <dd>
                            <p>名字{item1.name}</p>
                            <p>描述{item1.description}</p>
                            <p>价格{item1.price}</p>
                           {
                               item1.count > 0 ?  <>
                               <span onClick={this.handleChangeCount.bind(this,ind,index1,item1.count-1)}>-</span>
                               <span>{item1.count}</span>
                           </> : null
                           }
                            <span onClick={this.handleChangeCount.bind(this,ind,index1,item1.count+1)}>+</span>
                        </dd>
                    </dl>)
                }
            </div>
        )
    }
    handleChangeCount(ind,index,count){
        //通知父组件更新count
        this.props.changecount(ind,index,count);
        //往仓库里面添加、更新数据
        this.props.addshop(this.props.item.foods[index]);
    }
}

export default connect((state)=>{
    return {

    }
},(dispatch)=>{
    return {
        addshop(obj){
            dispatch({type:ADD_SHOP,obj})
        }
    }
})(Item)
