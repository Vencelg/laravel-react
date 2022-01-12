import React, { Fragment, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserContext from '../context/user/userContext';
import PrivateRoute from "./routing/PrivateRoute"
import SingleProblem from './SingleProblem/SingleProblem';
import Login from './Login/Login';
import Main from './Main/Main';
import Profile from './Profile/Profile'
import Admin from './Admin/Admin'
import setAuthToken from '../scripts/setAuthToken';
import AdminRoute from './routing/AdminRoute';


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
            <div className="container">
                <Fragment>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <PrivateRoute exact path="/" component={Main} />
                        <PrivateRoute exact path="/profile" component={Profile}/>
                        {/* <PrivateRoute exact path="/problem/:id" component={ProblemItem} /> */}
                        <AdminRoute exact path="/problem/:id" component={SingleProblem}/>
                        <AdminRoute exact path="/admin-users" component={Admin}/>
                        
                    </Switch>
                </Fragment>
            </div>
        </Router>
    );
}

export default App;


