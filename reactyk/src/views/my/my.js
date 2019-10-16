import React, { Component } from 'react'
import isLogin from '@/utils/islogin'


class My extends Component {
    render() {
        return (
            <div>
                我的
            </div>
        )
    }
}

export default isLogin(My);
