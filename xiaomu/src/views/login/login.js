import React, { Component } from 'react'
import {login} from '../../api/api'
export default class Login extends Component {
    state = {
        username:'',
        pwd:'',
        show:false
    }
    render() {
        let {username,pwd,show} = this.state;
        return (
            <div>
                <input placeholder="请输入用户名" value={username} name="username" onChange={this.handleChange.bind(this)}/>
                <input placeholder="请输入密码" value={pwd} name="pwd" onChange={this.handleChange.bind(this)}/>
                <p onClick={this.handleRegister.bind(this)} className={show ? 'active' :''}>注册</p>
                <button onClick={this.handleSubmit.bind(this)}>登录</button>
            </div>
        )
    }
    handleChange(e){
        let key = e.target.name;
        let val = e.target.value;
        this.setState({[key]:val})
    }
   async handleSubmit(){
        let {username,pwd} = this.state;
        let res = await login({userName:username,password:pwd});
        console.log(res);
        if(res.data.code == 1){
            window.localStorage.token = res.data.token;
            window.localStorage.userId = res.data.userId;
            this.props.history.go(-1);
        } else { //没有注册
            this.setState({show:true})
        }
    }
    handleRegister(){
        this.props.history.push('/register');
    }
}
