import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../context/user/userContext';


const AdminRoute = ({
  component: Component,
  ...rest
}) => {
  const userContext = useContext(UserContext);
  const { loading, isAuthenticated, user } = userContext;

  return (
    <Route
      {...rest}
      render={props =>
        loading ? (
          <span>"Loading"</span>
        ) : isAuthenticated && user.isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

}



export default AdminRoute;