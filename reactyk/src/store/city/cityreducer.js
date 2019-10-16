import { GET_CITY } from '../types'
const city = (state = { city: {} }, actions) => {
    switch (actions.type) {
        case GET_CITY:
            state.city = actions.list;
            return {
                ...state,
                city: {...state.city}
            }
        default:
            return {
                ...state,
                city: {...state.city}
            }
    }
}

export default city;