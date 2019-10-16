import React, { Component } from 'react'
import {connect} from 'react-redux'
console.log(connect,'connect');
class Frunt extends Component {
    render() {
        let {count} = this.props;
        console.log(this.props);
        return (
            <div>
                <button onClick={this.changecount.bind(this,count+1)}>+</button>
                <div>{count}</div>
                <button onClick={this.changecount.bind(this,count-1)}>-</button>
            </div>
        )
    }
    handleAdd(){
        this.props.addCount();
    }
    handleDel(){
        this.props.delCount();
    }
    changecount(count){
        this.props.changeCount(count);
    }
}

// const mapStateToProps = (state)=>{
//     console.log(state);
//     return {
//         count:state.count
//     }
// }

// const mapDispatchToProps = (dispatch)=>{
//     return{
        
//     }
// }


export default connect((state)=>{
    return{
        count:state.count
    }
},(dispatch)=>{
    return {
        addCount(){
            dispatch({type:'ADD'})
        },
        delCount(){
            dispatch({type:'DEL'})
        },
        changeCount(count){
            dispatch({type:'COUNT',count})
        }
    }
})(Frunt);
