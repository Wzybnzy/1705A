import React, { Component } from 'react'
import {connect} from 'react-redux'
class Coll extends Component {
    render() {
        let {list} = this.props;
        console.log(list);
        return (
            <div>
                {/* <Food item={item}/> */}
            </div>
        )
    }
}

export default  connect((state)=>{
    return {
        list:state.list.list
    }
},()=>{
    return {

    }
})(Coll)
