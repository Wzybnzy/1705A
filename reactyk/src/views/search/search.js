import React, { Component } from 'react'
import isLogin from '@/utils/islogin'
// class Login extends Component{
//     state = {
//         islogin:false
//     }
//     render(){
//         let {islogin} = this.state;
//         return islogin ? <Search {...this.props}/> :null
//     }
//     componentDidMount(){
//         if(window.localStorage.user){ //登录
//             this.setState({islogin:true})
//         } else {
//             this.props.history.push('/login');
//         }
//     }
// }

class Search extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                搜索
            </div>
        )
    }
}

export default isLogin(Search);