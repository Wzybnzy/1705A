import React, { Component } from 'react'

export default class Food extends Component {
    state = {
        arr:['常吃','不吃','偶尔','']
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
                            <span>{arr[item.flag]}</span>
                        </div>
                    </dd>
                </dl>
               {
                   item.check ?  <ul>
                   {
                       arr && arr.map((item1,index1) =>
                        <li 
                        onClick={this.handleText.bind(this,index1,item.id)}
                        key={index1}>{item1}</li>)
                   }
               </ul> : null
               }
            </div>
        )
    }
    handleClick(id){
        this.props.handleStar  && this.props.handleStar(id);
    }
    handleText(cur,id){
        this.props.handleText && this.props.handleText(cur,id);
    }
}
