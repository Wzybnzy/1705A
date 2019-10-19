import {ADD_LIST} from '../types'
const list = (state={list:[]},actions)=>{
    switch(actions.type){
        case ADD_LIST:
            let ind = state.list.findIndex(item => item.id == actions.obj.id);
            if(ind == -1){
                state.list.push(actions.obj);
            }
        return {
            ...state,
            list:[...state.list]
        }
        default:
            return {
                ...state,
                list:[...state.list]
            }
    }
}

export default list;