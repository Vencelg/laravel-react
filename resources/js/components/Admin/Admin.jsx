import React, { useContext } from 'react'
import UsersContext from '../../context/users/usersContext';
import RegisterUserForm from './RegisterUserForm';
import Header from '../Header/Header';
import UsersTable from './UsersTable';

const Admin = () => {

   const usersContext = useContext(UsersContext);
   const { loading, error, createUser } = usersContext;


   return (
      <>
         <Header />
         <main>
            <div className="main">
               <section>
               <RegisterUserForm
                     onSubmit={createUser}
                     clearOnSubmit
                  />
               </section>
               <section> <UsersTable/></section>
              

                  
               </div>
        
         </main>
      </>


   )


};





export default Admin
