import React, { Component } from 'react'
const isLogin = (Com)=>{
    return class Login extends Component{
        state = {
            islogin:false
        }
        render(){
            let {islogin} = this.state;
            return islogin ? <Com {...this.props}/> :null
        }
        componentDidMount(){
            if(window.localStorage.user){ //登录
                this.setState({islogin:true})
            } else {
                this.props.history.push('/login');
            }
        }
    }
}


export default isLogin;