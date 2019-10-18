import React, { Component } from 'react'
import axios from 'axios'
import '../../mock/index'
import Food from '../../components/food'
export default class Classify extends Component {
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
}
