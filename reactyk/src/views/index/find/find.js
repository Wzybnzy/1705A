import React, { Component } from 'react'
import axios from 'axios'
import '@/mock/index'
export default class Find extends Component {
    render() {
        return (
            <div>
                <div className="citylist">
                    <h3>A</h3>
                    <ul>
                        <li>
                            <img />
                            <span></span>
                        </li>
                    </ul>
                </div>
                <ol className="fixedcity">
                    <li>A</li>
                    <li>B</li>
                </ol>
            </div>
        )
    }
   async componentDidMount(){
    let res = await axios.get('/api/city');
    console.log(res);
    }
}
