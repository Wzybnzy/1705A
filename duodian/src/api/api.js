import axios from 'axios';

//登录
export const login = (params)=> axios.post('/api/user/login',params);
//注册
export const registry = (params)=> axios.post('/api/user/registry',params);


//首页banner
export const banner = ()=> axios.get('/api/home/banner');



