import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import UserState from '../context/user/userState';
import PrivateRoute from "./routing/PrivateRoute"
import Login from './Login/Login';
import Main from './Main';
import setAuthToken from '../scripts/setAuthToken';

const App = () => {
    useEffect(()=>{
        if (localStorage.token) {
          setAuthToken(localStorage.token);
        }
       // store.dispatch(loadUser());
      }, [])
    return (
        <UserState>
            <Router>
                <div className="container">
                <Fragment>
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <PrivateRoute exact path="/" component={Main}/>
                    </Switch>
                </Fragment>
                </div>
            </Router>
        </UserState>
    );
}

export default App;


