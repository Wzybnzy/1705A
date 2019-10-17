import React, { Component } from 'react'
import islogin  from '../../utils/islogin'
import Head from '../../components/head'
class Index extends Component {
    render() {
        // console.log(this.props);
        return (
            <div>
                <Head/>

                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"></div>
                    </div>
                </div>

                <div onClick={this.handleVote.bind(this)}>投票</div>


            </div>
        )
    }
    handleVote(){
        this.props.history.push('/vote');
    }
}


export default  islogin(Index);