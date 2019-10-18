import React, { Component } from 'react'

export default class Food extends Component {
    state = {
        arr:['常吃','不吃','偶尔']
    }
    render() {
        console.log(this.props,'@@@@@@@@@@@@@@@2');
        let {item,handleStar} = this.props;
        let {arr} = this.state;
        return (
            <div className="foods">
                <dl>
                    <dt>
                        <img src={item.src}/>
                    </dt>
                    <dd>
                        <h3>{item.name}</h3>
                        <div>
                            <span>{item.weight}</span>
                            <span onClick={this.handleClick.bind(this,item.id)}>星星</span>
                        </div>
                    </dd>
                </dl>
               {
                   item.check ?  <ul>
                   {
                       arr && arr.map((item,index) => <li key={index}>{item}</li>)
                   }
               </ul> : null
               }
            </div>
        )
    }
    handleClick(id){
        this.props.handleStar(id);
    }
}
