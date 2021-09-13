import { useReducer } from "react";
import axios from "axios";
import UserContext from "./userContext";
import UserReducer from "./userReducer";
import { GET_USER, SET_LOADING } from "../types"

const UserState = props => {
    const initalState = {
        id: null,
        name: "",
        email:"",
        admin: false,
        loading:false,
        error: null,
        isAuthenticated:false,
        token: localStorage.getItem('token'),
    }

    const [state, dispatch] = useReducer(UserReducer, initalState);


    const getUser = async(username) => {
        setLoading();
        const res = await axios.get("");
        dispatch({
            type: GET_USER,
            payload: res.data
        })
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
                getUser,
            }
        } >

        { props.children } 
        </UserContext.Provider>
}

export default UserState;