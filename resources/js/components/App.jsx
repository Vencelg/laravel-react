import React, { Fragment, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserContext from '../context/user/userContext';
import PrivateRoute from "./routing/PrivateRoute"
import SingleProblem from './SingleProblem/SingleProblem';
import PasswordChange from './PasswordChange/PasswordChange';
import Login from './Login/Login';
import Main from './Main/Main';
import Profile from './Profile/Profile'
import Admin from './Admin/Admin'
import setAuthToken from '../scripts/setAuthToken';
import AdminRoute from './routing/AdminRoute';
import "../../css/app.css"




const App = () => {
    const userContext = useContext(UserContext);
    const { loadUser } = userContext;
    useEffect(() => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }
        loadUser();
    }, [])
    return (

        <Router>
            <div>
                <Fragment>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <PrivateRoute exact path="/" component={Main} />
                        <PrivateRoute exact path="/password-change" component={PasswordChange} />
                        
                        <PrivateRoute exact path="/profile" component={Profile}/>
                        <AdminRoute exact path="/problem/:id" component={SingleProblem}/>
                        <AdminRoute exact path="/admin-users" component={Admin}/>
                        
                    </Switch>
                </Fragment>
            </div>
        </Router>
    );
}

export default App;


