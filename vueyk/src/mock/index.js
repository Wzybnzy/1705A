import Mock from 'mockjs'
import banner from './banner.json'

import data from './data.json'

Mock.mock('/api/banner',banner);

Mock.mock('/api/list',data);


//登录
Mock.mock('/api/login',({body})=>{
    console.log(body);
    let {name,pwd} = JSON.parse(body);
    if(name == 'zs' && pwd== '123'){
        return {
            code:1,
            mes:'成功'
        }
    } else {
        return {
            code:0,
            mes:"失败"
        }
    }
});