import { GET_USER, SET_LOADING } from "../types"

const Reducer = (state, action) => {
    switch (action.type) {
        
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {...state, loading: true }
        default:
            return state;
    }
}

export default Reducer