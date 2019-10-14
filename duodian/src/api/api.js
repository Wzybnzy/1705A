// import httpAxios from 'axios';
import httpAxios from '@/utils/http.js'

//登录
export const login = (params)=> httpAxios.post('/api/user/login',params);
//注册
export const registry = (params)=> httpAxios.post('/api/user/registry',params);
//获取用户信息
export const getUserInfo = ()=> httpAxios.get('/api/user/getUserInfo');


//首页banner
export const banner = ()=> httpAxios.get('/api/home/banner');
//获取首页商品
export const shop = (params)=> httpAxios.get('/api/home/shop',{params});


//获取分类列表

export const shopType = ()=> httpAxios.get('/api/shop/shopType');
//筛选分类
export const selectType = (params)=> httpAxios.get('/api/shop/selectType',{params});


//添加购物车
export const addCar = (params)=> httpAxios.post('/api/car/addCar',params);
//获取购物车商品
export const getCar = (params)=> httpAxios.get('/api/car/getCar',{params});







