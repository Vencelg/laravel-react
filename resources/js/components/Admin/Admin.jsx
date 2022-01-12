import React, {useState} from 'react'
import useRegisterUser from '../../hooks/useRegisterUser'
import RegisterUserForm from './RegisterUserForm';

const Admin = () => {



    const registerUserQuery = useRegisterUser()

    return (
   
      <div className="flex">
         <div className="form-container">
                     <RegisterUserForm
                        onSubmit={registerUserQuery.mutateAsync}
                        clearOnSubmit
                       
                        submitText={
                           registerUserQuery.isLoading
                              ? 'Saving...'
                              : registerUserQuery.isError
                                 ? 'Error!'
                                 : registerUserQuery.isSuccess
                                    ? 'Saved!'
                                    : 'Register User'
                        }
                     />
                  </div>
       </div>
         
      )
  
      
};


   


export default Admin
