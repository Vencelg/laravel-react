import React, {useContext} from 'react'
import UsersContext from '../../context/users/usersContext';

const UserItem = ({user}) => {

   const usersContext = useContext(UsersContext);

   const {
    deleteUser
    } = usersContext;

    const onDelete = () => {
      deleteUser(user.id);
    }

   return (
      <tr>
         <td>{user.id}</td>
         <td>{user.name}</td>
         <td>{user.email}</td>
         <td className={user.admin ? "done" : "warn"}>{user.admin ? "Admin" : "Uživatel"}</td>
         <td><button title="Smazat" onClick={onDelete} className='edit'><i className="fas fa-trash"></i></button></td>
      </tr>
   )
}

export default UserItem
