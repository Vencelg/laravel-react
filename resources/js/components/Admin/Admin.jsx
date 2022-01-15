import React, {useContext} from 'react'
import UsersContext from '../../context/users/usersContext';
import RegisterUserForm from './RegisterUserForm';

const Admin = () => {

   const userContext = useContext(UsersContext);
   const { loading, error, createUser } = userContext;


    return (
   
      <div className="flex">
         <div className="form-container">
                     <RegisterUserForm
                        onSubmit={createUser}
                        clearOnSubmit
                       
                        submitText={
                           loading
                              ? 'Saving...'
                              : error
                                 ? 'Error!'
                                    : 'Register User'
                        }
                     />
                  </div>
       </div>
         
      )
  
      
};


   


export default Admin
