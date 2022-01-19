import React, { useContext } from 'react'
import UserContext from '../../context/user/userContext';
import { Link } from 'react-router-dom';

const AlertBox = () => {

   const userContext = useContext(UserContext);
   const { user } = userContext;

   const [displayWarn, setDisplay] = React.useState(true)


   return (
      !user.pswdChanged && displayWarn && (

         <div className='alert'>
            <span><i className="fas fa-exclamation-triangle"></i>Doporučujeme <Link to="/password-change" className='alertLink'>nastavit si vlastní heslo</Link></span>
            <button onClick={e => setDisplay(false)}><i className="fas fa-times"></i></button>
         </div>
      )


   )
}

export default AlertBox
