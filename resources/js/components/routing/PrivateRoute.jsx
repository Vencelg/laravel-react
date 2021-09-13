import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../context/user/userContext';


const PrivateRoute = ({
  component: Component,
  ...rest
}) =>{
   const userContext = useContext(UserContext);
   const {loading, isAuthenticated} = userContext;

   return ( 
      <Route
        {...rest}
        render={props =>
          loading ? (
            <span>"Loading"</span>
          ) : isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );

} 



export default PrivateRoute;