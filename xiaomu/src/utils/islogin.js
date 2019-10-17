import React,{Component} from 'react'

const islogin = (Com)=>{ 
    return class extends Component{ //

        state = {
            isShow:false
        }

        render(){
            return this.state.isShow ? <Com {...this.props}/> : null;
        }
        componentDidMount(){
            //判断本地是否存在
            if(window.localStorage.token){ //登录了
                this.setState({isShow:true})
            } else {
                this.props.history.push('/login');
            }
        }
    }
}


export default islogin;
