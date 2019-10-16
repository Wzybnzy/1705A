import React, { Component } from 'react'
import axios from 'axios'
import '@/mock/index'
export default class Find extends Component {
    state = {
        list: {}
    }
    render() {
        let { list } = this.state;
        return (
            <div>
                {
                    Object.keys(list).map((item, index) => <div 
                    ref={'title_'+item}
                    className="citylist" key={index}>
                        <h3>{item}</h3>
                        <ul>
                           {
                               list[item] && list[item].map((item1,index1) => <li key={index1}>
                               <img src={item1.CoverPhoto}/>
                               <span>{item1.Name}</span>
                           </li>)
                           }
                        </ul>
                    </div>)
                }
                <ol className="fixedcity">
                    {
                        Object.keys(list).map((item, index) => 
                        <li key={index}
                        onClick={this.handleScroll.bind(this,item)} 
                        >{item}</li>)
                    }
                </ol>
            </div>
        )
    }
    async componentDidMount() {
        let res = await axios.get('/api/city');
        console.log(res);
        this.setState({ list: res.data })
    }
    handleScroll(key){
        console.log(key,this.refs['title_'+key]);
        document.documentElement.scrollTop = this.refs['title_'+key].offsetTop - 44;
    }
}
