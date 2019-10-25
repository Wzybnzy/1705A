import { ADD_SHOP } from '../types'
const list = (state = { list: [] }, actions) => {
    switch (actions.type) {
        case ADD_SHOP: { //添加购物车
            let ind = state.list.findIndex(item => item.name == actions.obj.name);
            if (ind == -1) {
                state.list.push(actions.obj);
            } else {
                // state.list[ind].count 
            }

            return {
                ...state,
                list: [...state.list]
            }
        }
        default: return {
            ...state,
            list: [...state.list]
        }
    }
}

export default list;