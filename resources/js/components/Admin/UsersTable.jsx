import React, {useEffect, useContext} from 'react'
import UsersContext from '../../context/users/usersContext';
import UserItem from './UserItem';

const UsersTable = () => {

   const usersContext = useContext(UsersContext);

     const {
      loading,
      users,
      loadUsers,
      } = usersContext;
 
    

   useEffect(()=>{
      loadUsers(); 
   }, []) 

   return (
      <table className='problemTable'>
         <thead>
            <tr>
               <td className='sm-none'>Id</td>
               <td  className='sm-none'>Jméno</td>
               <td>Email</td>
               <td  className='sm-none'>Oprávnění</td>
               <td></td>
            </tr>
         </thead>
         <tbody>
            {
               !loading && (
                  users && (
                     users.map((user) => (
                        <UserItem key={user.id} user={user} />
                        
                     )
                     )
                  )
                 
               )
            }    
            
            </tbody>
      </table>
   )
}

export default UsersTable

