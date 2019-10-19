import React, { Component } from 'react'

export default class My extends Component {
    render() {
        return (
            <div>
                <div onClick={this.handleClick.bind(this)}>我的收藏</div>
            </div>
        )
    }
    handleClick(){
        this.props.history.push('/coll');
    }
}
