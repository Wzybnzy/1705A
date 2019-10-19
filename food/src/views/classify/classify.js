import React, { Component } from 'react'
import axios from 'axios'
import '../../mock/index'
import Food from '../../components/food'
import {connect} from 'react-redux'
import {ADD_LIST} from '../../store/types'
class Classify extends Component {
    state = {
        list:[],
        newlist:[]
    }
    render() {
        let {newlist} = this.state;
        console.log(newlist);
        return (
            <div>
                {
                    newlist && newlist.map((item,index) => 
                    <Food 
                    handleStar = {this.handleStar.bind(this)}
                    handleText = {this.handleText.bind(this)}
                    key={index} 
                    item={item}/>)
                }
            </div>
        )
    }
    async componentDidMount(){
        let res = await axios.get('/api/classify');
        console.log(res,this.props);
        let newlist = res.data.filter(item => item.type == this.props.match.params.type);
        console.log(newlist);
        this.setState({list:res.data,newlist})

    }
    handleStar(id){
        console.log('classify',id);
        let {list} = this.state;
        let ind = list.findIndex(item => item.id == id);
        list[ind].check = !list[ind].check;
        this.setState({list})
    }
    handleText(cur,id){ //cur 点击的常吃不吃偶然的索引
        console.log(cur,id);
        let {list} = this.state;
        let ind = list.findIndex(item => item.id == id);
        list[ind].flag = cur;
        list[ind].check = false;
        this.setState({list})
        this.props.addlist(list[ind]);
    }
}


export default  connect((state)=>{
    return {

    }
},(dispatch)=>{
    return {
        addlist(obj){
            dispatch({type:ADD_LIST,obj})
        }
    }
})(Classify)