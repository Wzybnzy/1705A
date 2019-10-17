import React, { Component } from 'react'
import head from './head.module.scss'
import {withRouter} from 'react-router-dom'
class Head extends Component {
    static defaultProps = {
            back:false,
            title:'沐恩',
            right:''
    }

    render() {
        // console.log(this.props);
        let {back,title,right} = this.props;
        return (
            <div>
                <header className={`${head['header']}`}>
                    {back ? <span onClick={()=>{
                        this.props.history.go(-1);
                    }}>&lt;</span> : null}
                    <h3>{title}</h3>
                    <span>{right}</span>
                </header>
            </div>
        )
    }
}

export default  withRouter(Head);

