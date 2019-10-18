import React, { Component } from 'react'
import axios from 'axios'
import '../../../mock/index'
export default class Home extends Component {
    state = {
        list:[]
    }
    render() {
        let {list} = this.state;
        return (
            <div>
                {
                    list && list.map((item,index)=> <dl 
                    onClick={this.handleClassify.bind(this,item.type)}
                    key={index}>
                        <dt>
                            <img />
                        </dt>
                        <dd>{item.name}</dd>
                    </dl>)
                }
            </div>
        )
    }
    async componentDidMount(){
        let res = await axios.get('/api/list');
        console.log(res);
        this.setState({list:res.data});
    }
    handleClassify(type){
        this.props.history.push('/classify/'+ type);
    }
}
