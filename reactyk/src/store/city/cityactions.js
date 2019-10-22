import axios from 'axios'
import '@/mock/index'
import {GET_CITY} from '../types'
// getlist(dispatch); 
export const getlist = (id) => async (dispatch)=>{
    let res = await axios.get('/api/city');
    console.log(res.data,'@@@@@@@',id);
    dispatch({type:GET_CITY,list:res.data})
}











// export const getcity = async (dispatch)=>{
//     let res = await axios.get('/api/list');
//     console.log(res.data);
//     dispatch({type:GET_CITY,list:res.data})
// }