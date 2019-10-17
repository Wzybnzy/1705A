import React, { Component } from 'react'
import Head from '../../components/head'
import {allVote} from '../../api/api'
export default class Vote extends Component {
    render() {
        return (
            <div>
                <Head back={true} title="投票" right="发起投票"/>
            </div>
        )
    }
    async componentDidMount(){
        let res = await allVote();
        console.log(res);
    }
}
