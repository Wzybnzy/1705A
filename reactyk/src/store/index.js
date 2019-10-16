import { createStore,combineReducers,applyMiddleware } from 'redux'
import count from './count/countreducer'
import list from './list/listreducer'
import city from './city/cityreducer'
import thunk from 'redux-thunk'  
import logger from 'redux-logger'  

// const {createStore} = require('redux'); 

// const reducer = (state = { count: 0,list:[] }, actions) => {
//     // JSON.parse(JSON.stringify(state))
//     switch (actions.type) {
//         case 'ADD':
//             state.count++;
//             return {
//                 ...state
//             }
//         case 'DEL':
//             state.count--;
//             return {
//                 ...state
//             }
//         case 'COUNT':
//             state.count = actions.count;
//             return {
//                 ...state
//             }
//         case 'ADD_LIST':
//             state.list.push(actions.val);
//             return {
//                 ...state,
//                 list:[...state.list]
//             }
//         case 'DEL_LIST':
//             state.list.splice(actions.ind,1)
//             return {
//                 ...state,
//                 list:[...state.list]
//             }
//         default: return {
//             ...state
//         }
//     }
// }


const reducer = combineReducers({
    count,
    list,
    city
})

const store = createStore(reducer,applyMiddleware(thunk,logger));
// console.log(store.getState());
// store.dispatch({type:'ADD'})
// console.log(store.getState());
window.store = store;

export default store;
