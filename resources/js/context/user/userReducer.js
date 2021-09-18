import { SET_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_PROFILE, LOGOUT } from "../types"

const Reducer = (state, action) => {
    switch (action.type) {
        
        case USER_LOADED:
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload, 
                isAuthenticated: true,
                loading: false
            };
        case SET_LOADING:
            return {...state, loading: true }
        case AUTH_ERROR:
        case LOGOUT:
            return {
                ...state,
                user: null,
                token: null,
                isAuthenticated: false,
                error: action.payload,
                loading: false,       
            };
        default:
            return state;
    }
}

export default Reducer