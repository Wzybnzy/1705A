import React, { Component } from 'react'
import {connect} from 'react-redux'
import {ADD,DEL,COUNT,ADD_LIST,DEL_LIST} from '@/store/types'
import '@/mock/index'
import {getlist} from '@/store/city/cityactions'
// import Axios from 'axios';
console.log(connect,'connect');
class Frunt extends Component {
    state = {
        val:''
    }
    render() {
        let {count,list} = this.props;
        console.log(this.props);
        let {val} = this.state;
        return (
            <div>
                <button onClick={this.changecount.bind(this,count+1)}>+</button>
                <div>{count}</div>
                <button onClick={this.changecount.bind(this,count-1)}>-</button>

                <input 
                value={val} name="val" 
                onChange={this.handleChangeVal.bind(this)}
                onKeyUp={this.handleKeyUp.bind(this)}
                />
                <ul>
                    {
                        list && list.map((item,index) => 
                        <li 
                        onClick={this.handleDelList.bind(this,index)}
                        key={index}>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
    handleAdd(){
        this.props.addCount();
    }
    handleDel(){
        this.props.delCount();
    }
    componentDidMount(){
        this.props.getList();
        // Axios.get('/api/city').then(()=>{

        // })
    }
    changecount(count){
        console.log('changecount#################');
        this.props.changeCount(count);
    }
    handleChangeVal(e){
        let name = e.target.name; //val
        this.setState({[name]:e.target.value})
        
    }
    handleKeyUp(e){
        if(e.keyCode == 13){
            let {val} = this.state;
            this.props.addlist(val);
        }
    }
    handleDelList(ind){
        this.props.dellist(ind);
    }
}

export default connect((state)=>{
    console.log(state,'state@@@@@@@@@@@@@@@');
    return{
        count:state.count.count,
        list:state.list.list
    }
},(dispatch)=>{
    return {
        addCount(){
            dispatch({type:ADD})
        },
        delCount(){
            dispatch({type:DEL})
        },
        changeCount(count){
            dispatch({type:COUNT,count})
        },
        addlist(val){
            dispatch({type:ADD_LIST,val})
        },
        dellist(ind){ 
            dispatch({type:DEL_LIST,ind})
        },
        getList(){ //thunk 
            dispatch(getlist)
        }
    }
})(Frunt);
