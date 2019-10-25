import {createStore,combineReducers} from 'redux'

import list from './list/list'

const reducer = combineReducers({
    list
})

const store = createStore(reducer);
window.store = store;


export default store;