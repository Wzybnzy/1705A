import {createStore,combineReducers} from 'redux'
import list from './modules/listreducer'
const reducer = combineReducers({
    list
})

const store = createStore(reducer);

window.store = store;

export default store;