import React, { Component } from 'react'
import Head from '../../components/head'
import { allVote } from '../../api/api'
import vote from './vote.module.scss'
export default class Vote extends Component {
    state = {
        arrTitle: ['全部', '已结束', '正在进行'],
        ind: 0,
        list: [],
        newslist:[] //最终的结果
    }
    render() {
        let { arrTitle, ind, list,newslist } = this.state;
        return (
            <div>
                <Head back={true} title="投票" right="发起投票" url="/createvote"/>
                <div className={`${vote['tab']}`}>
                    <ul>
                        {
                            arrTitle && arrTitle.map((item, index) =>
                                <li
                                    key={index}
                                    onClick={this.handleTab.bind(this,index)}
                                    className={`${vote[ind == index ? 'active' : '']}`}
                                >{item}</li>)
                        }
                    </ul>
                </div>
                <div className={`${vote['votelist']}`}>
                    {
                        newslist && newslist.map((item, index) => <dl key={index}>
                            <dt>
                                <img src=""/>
                            </dt>
                            <dd>
                                <h3>{item.title}</h3>
                                <p>{item.endTime}</p>
                                <p>{item.isSingle ? '多选' : '单选'}</p>
                            </dd>
                        </dl>)
                    }
                </div>
            </div>
        )
    }
    async componentDidMount() {
        let res = await allVote();
        console.log(res);
        this.setState({ list: res.data,newslist:res.data })
    }
    handleTab(ind){ //点击tab
        let {list,newslist} = this.state;
        this.setState({ind})
        let time = new Date().getTime();
        console.log(time);
        // 大于 
        // ind === 0 
        newslist = ind == 0 ?  list : list.filter(item => {
            return ind == 1 ? time > new Date(item.endTime) : time < new Date(item.endTime)
        })

        // console.log(newslist);
        this.setState({newslist})
    }
}
