import { useReducer } from "react";
import api from "../../scripts/api";
import UsersContext from "./usersContext"
import UsersReducer from "./usersReducer"
import { USERS_LOADED, USER_DELETE, USERS_ERROR, USER_CREATE } from "../types"


const UsersState = props => {
    const initalState = {
        users: [],
        loading: true,
        error: null
    }
 
    const [state, dispatch] = useReducer(UsersReducer, initalState);


    // načíst uživatele
    const loadUsers = async () => {
        try {
           
            const res = await api.get('/admin/users');

          
            dispatch({
                type: USERS_LOADED,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: USERS_ERROR,
                payload: error.response.data.message
            });
        }
    };

    
    const createUser = async (values) => {
      try {
         
          const res = await api.post('/admin/users', values);
     
          dispatch({
              type: USER_CREATE,
              payload: res.data
          });
      } catch (error) {
          dispatch({
              type: USERS_ERROR,
              payload: error.response.data.message
          });
      }
  };

  const deleteUser = async (userId) => {
   try {
      
       const res = await api.delete(`/admin/users/${userId}`);

       dispatch({
           type: USER_DELETE,
           payload: userId
       });
   } catch (error) {
       dispatch({
           type: USERS_ERROR,
           payload: error.response.data.message
       });
   }
};

    return <UsersContext.Provider value={
        {
            users:state.users,
            loading: state.loading,
            error: state.error,   
            createUser,
            loadUsers,
            deleteUser          
        }
    } >

        {props.children}
    </UsersContext.Provider>
}

export default UsersState;