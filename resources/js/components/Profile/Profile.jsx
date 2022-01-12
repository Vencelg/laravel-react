import React, {useContext} from 'react'
import UserContext from '../../context/user/userContext';
import { Link } from 'react-router-dom';

const Profile = () => {

   const userContext = useContext(UserContext);
   const { user, logout } = userContext;


   return (
      <div>
         <section>
            {user.id}
            |
            {user.name}
            |
            {user.email}
         </section>

         <section>
            {user.admin && (<Link to={`/admin-users`}>Users</Link>)}
         </section>

         <Link to={`/`}>Back</Link>
      </div>
   )
}

export default Profile
