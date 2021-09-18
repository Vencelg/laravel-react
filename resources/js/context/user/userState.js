import { useReducer } from "react";
import api from "../../scripts/api";
import UserContext from "./userContext";
import UserReducer from "./userReducer";
import { SET_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_PROFILE, LOGOUT } from "../types"
import setAuthToken from "../../scripts/setAuthToken";

const UserState = props => {
    const initalState = {
        user :{
            id: null,
            name: "",
            email:"",
            admin: false,
        },
        loading:false,
        error: null,
        isAuthenticated:false,
        token: localStorage.getItem('token'),
    }   

    const [state, dispatch] = useReducer(UserReducer, initalState);
     

    // načíst uživatele
    const loadUser = async () => {
        try {
            setLoading()
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
        setLoading()
        const res = await api.post('/login', body);
       
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        loadUser();
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
    }




    const setLoading = () => dispatch({ type: SET_LOADING })

    return <UserContext.Provider value = {
            {
                id: state.id,
                name: state.name,
                email: state.email,
                admin: state.admin,
                loading: state.loading,
                error: state.error,
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                login,
                loadUser
            }
        } >

        { props.children } 
        </UserContext.Provider>
}

export default UserState;