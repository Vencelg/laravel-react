import { USERS_LOADED, USER_DELETE, USERS_ERROR, USER_CREATE } from "../types"

const Reducer = (state, action) => {
    switch (action.type) {
       case USERS_LOADED:
          return {
            ...state,
            users: action.payload.users,
            error: null,
            loading: false
          }
      case USER_DELETE:
         return {
            ...state,
            users: state.users.filter((user) => user.id !== action.payload),
            error: null,
            loading: false
         }
      case USER_CREATE: 
         return {
            ...state,
            users: [action.payload.newUser, ...state.users],
            error: null,
            loading: false
         }
      case USERS_ERROR: 
         return {
            ...state,
            error: action.payload,
            loading: false
         }
        default:
            return state;
    }
}

export default Reducer 