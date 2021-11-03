import { useReducer } from "react";
import api from "../../scripts/api";
import UserContext from "./userContext";
import UserReducer from "./userReducer";
import { USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, CLEAR_PROFILE, LOGOUT } from "../types"
import setAuthToken from "../../scripts/setAuthToken";

const UserState = props => {
    const initalState = {
        user: {},
        loading: true,
        error: null,
        isAuthenticated: false,
        token: localStorage.getItem('token'),
    }

    const [state, dispatch] = useReducer(UserReducer, initalState);


    // načíst uživatele
    const loadUser = async () => {

        try {
           
            const res = await api.get('/user');


            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: error.response.data.message
            });
        }
    };
     
    // Přihlásit
    const login = async (email, password) => {
        const body = { email, password };

        try {
         
            const res = await api.post('/login', body);
            //console.log(res.data.access_token);
            setAuthToken(res.data.access_token);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });


        } catch (error) {
            const errors = error.response.data.message;
            console.log(errors);
            dispatch({
                type: AUTH_ERROR,
                payload: errors
            });
        }
    };

    // Odhlásit
    const logout = () => {
        dispatch({ type: CLEAR_PROFILE });
        dispatch({ type: LOGOUT });
        setAuthToken();
    }


    return <UserContext.Provider value={
        {
            user:state.user,
            loading: state.loading,
            error: state.error,
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            login,
            loadUser,
            logout
        }
    } >

        {props.children}
    </UserContext.Provider>
}

export default UserState;