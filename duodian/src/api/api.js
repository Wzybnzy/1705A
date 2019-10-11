import axios from 'axios';

//登录
export const login = (params)=> axios.post('/api/user/login',params);
//注册
export const registry = (params)=> axios.post('/api/user/registry',params);


//首页banner
export const banner = ()=> axios.get('/api/home/banner');
//获取首页商品
export const shop = (params)=> axios.get('/api/home/shop',{params});




