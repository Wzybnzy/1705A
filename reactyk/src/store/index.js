import { createStore } from 'redux'
// const {createStore} = require('redux'); 

const reducer = (state = { count: 0 }, actions) => {
    switch (actions.type) {
        case 'ADD':
            state.count++;
            return {
                ...state
            }
        case 'DEL':
            state.count--;
            return {
                ...state
            }
        case 'COUNT':
            state.count = actions.count;
            return {
                ...state
            }
        default: return {
            ...state
        }
    }
}

const store = createStore(reducer);
// console.log(store.getState());
// store.dispatch({type:'ADD'})
// console.log(store.getState());
window.store = store;

export default store;
