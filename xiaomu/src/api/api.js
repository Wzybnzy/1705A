import httpAxios from '../utils/http';

//登录
export const login = (params)=> httpAxios.post('/login',params);
//注册
export const register = (params)=> httpAxios.post('/register',params);

//获取投票
export const allVote = (params)=> httpAxios.get('/vote/allVote',{params});

//发起投票
export const newvote = (params)=> httpAxios.post('/vote/newvote',params);
