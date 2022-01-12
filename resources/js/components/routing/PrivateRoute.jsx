import React, { useContext } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import UserContext from '../../context/user/userContext';




const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  const userContext = useContext(UserContext);
  const { loading, isAuthenticated, user } = userContext;

  const location = useLocation()

if(isAuthenticated){
  if( !user.pswdChanged && location.pathname != "/password-change"){
    return <Redirect to="/password-change" />
   } 
}
  

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